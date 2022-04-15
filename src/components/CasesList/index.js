import React, { useEffect, useState } from "react";
import { supabase } from "../../services/api";

// import { Container } from './styles';

function CasesList() {
  const [cases, setCases] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const from = page ? page * limit : 0;
    const to = page ? from + size : size;

    return { from, to };
  };

  useEffect(() => {
    const fetchCases = async (page) => {
      const { from, to } = getPagination(page, 10);

      const getData = await supabase
        .from("covid-cases")
        .select()
        .range(from, to);

      if (pageNumber === 1) {
        setCases(getData.data);
      } else {
        setCases((c) => c.concat(getData.data));
      }

      return {
        props: {
          data: getData.data,
          page: +page,
        },
      };
    };

    fetchCases(pageNumber);
  }, [pageNumber]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setPageNumber((currentPageInside) => currentPageInside + 1);
      }
    });

    intersectionObserver.observe(document.querySelector("#observer"));

    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <div className="card my-4">
      <div className="card-body">
        <h5 className="card-title">Case history</h5>

        <div
          className="mt-4"
          style={{ overflowY: "scroll", maxHeight: "35vh" }}
        >
          <table className="table table-responsive table-striped">
            <thead>
              <tr>
                <th scope="col">Location</th>
                <th scope="col">Date</th>
                <th scope="col">Variant</th>
                <th scope="col">Confirmed Cases</th>
                <th scope="col">Percentage of Cases</th>
                <th scope="col">Total Cases</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((cases, index) => (
                <tr key={index}>
                  <th scope="row"> {cases.location} </th>
                  <td> {cases.date} </td>
                  <td>{cases.variant}</td>
                  <td>{cases.num_sequences} </td>
                  <td>{cases.perc_sequences} % </td>
                  <td>{cases.num_sequences_total} </td>
                </tr>
              ))}
              <tr id="observer">
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CasesList;
