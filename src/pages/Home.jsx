import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import RegionMenu from "../components/RegionMenu";
import CountryList from "../components/CountryList";
import ShowMessage from "../components/ShowMessage";

const Home = () => {
  const [countriesList, setCountriesList] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchCountriesData();
  }, []);

  const fetchCountriesData = () => {
    setIsLoading(true);

    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountriesList(data);
        setFilteredCountries(data);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {isError && <ShowMessage message="Something went wrong!" />}
      {isLoading && <ShowMessage message="Loading data..." />}
      {!isError && !isLoading && (
        <>
          <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              countriesList={countriesList}
              filterCountriesList={setFilteredCountries}
            />
            <RegionMenu
              countriesList={countriesList}
              filterCountriesList={setFilteredCountries}
            />
          </div>
          <CountryList data={filteredCountries} />
        </>
      )}
    </>
  );
};

export default Home;
