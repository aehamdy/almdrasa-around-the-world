import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import Header from "./components/Header";
import RegionMenu from "./components/RegionMenu";
import SearchInput from "./components/SearchInput";

function App() {
  const [countriesList, setCountriesList] = useState([]);

  useEffect(() => {
    fetchCountriesData();
  }, []);

  const fetchCountriesData = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCountriesList(data);
      });
  };
  return (
    <div className="min-h-screen w-screen bg-gray-100 font-inter dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <div className="container mx-auto px-5 md:px-0">
        <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
          <SearchInput />
          <RegionMenu />
        </div>
        <CountryList data={countriesList} />
      </div>
    </div>
  );
}

export default App;
