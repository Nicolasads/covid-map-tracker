import React from "react";
import legendItems from "../../entities/LegendItems";
import CovidMap from "../Map";
import Legend from "../Legend";
import CasesList from "../CasesList";
import Statistics from "../Statistics";

function Dashboard({ data }) {
  const legendItemsReverse = [...legendItems].reverse();

  return (
    <div className="main-content">
      <div className="container-fluid">
        <div>
          <h1 className="text-center">Covid Daily Cases</h1>

          <div className="container-fluid mt-5">
            <div className="row">
              <div className="col-12 col-md-8">
                <div>
                  <h3>Total cases in the world</h3>

                  <CovidMap countries={data} />

                  <Legend legendItems={legendItemsReverse} />

                  <CasesList />
                </div>
              </div>
              <Statistics cases={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
