import React, { useEffect, useState } from "react";
import Chart from "../Chart";

// import { Container } from './styles';

function Statistics({ cases }) {
  const [confirmed, setConfirmed] = useState();
  const [deaths, setDeaths] = useState();

  useEffect(() => {
    const getDeathCases = () => {
      let value = cases.reduce(
        (total, caseValue) => Number(caseValue.properties.deaths) + total,
        0
      );
      setDeaths(value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    };

    const getConfirmedCases = () => {
      let value = cases.reduce(
        (total, caseValue) => Number(caseValue.properties.confirmed) + total,
        0
      );
      setConfirmed(value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    };

    getConfirmedCases();
    getDeathCases();
  }, [cases]);

  return (
    <div className="col-12 col-md-4 mt-5 mt-md-0 ">
      <h3>Cases list</h3>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Confirmed</h5>
          <h5 className="card-text text-info"> {confirmed} </h5>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h5 className="card-title">Deaths</h5>
          <h5 className="card-text text-danger "> {deaths} </h5>
        </div>
      </div>

      <Chart cases={cases} />
    </div>
  );
}

export default Statistics;
