import { useEffect, useState } from "react";
import LoadCountriesTask from "./tasks/LoadCountries";
import Loading from "./components/Loading";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [countries, setCountries] = useState([]);

  const load = () => {
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load((countries) => setCountries(countries));
  };

  useEffect(load, []);

  return (
    <>{countries.length === 0 ? <Loading /> : <Dashboard data={countries} />}</>
  );
}
