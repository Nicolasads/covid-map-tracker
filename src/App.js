import CovidMap from "./components/Map";
import { useEffect, useState } from "react";
import LoadCountriesTask from "./tasks/LoadCountries";
import legendItems from "./entities/LegendItems";
import Legend from "./components/Legend";
import Statistics from "./components/Statistics";
import CasesList from "./components/CasesList";

export default function App() {
  const [countries, setCountries] = useState([]);
  const legendItemsReverse = [...legendItems].reverse();

  const load = () => {
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load((countries) => setCountries(countries));
  };

  useEffect(load, []);

  return (
    <div className="main-content">
      <div className="container-fluid">
        <div>
          <h1 className="text-center">Covid Daily Cases</h1>

          <div className="container-fluid mt-5">
            <div className="row">
              <div className="col-12 col-md-8">
                {countries.length === 0 ? (
                  <h3>Loading...</h3>
                ) : (
                  <div>
                    <h3>Total cases in the world</h3>

                    <CovidMap countries={countries} />

                    <Legend legendItems={legendItemsReverse} />

                    <CasesList />
                  </div>
                )}
              </div>
              <Statistics cases={countries} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
