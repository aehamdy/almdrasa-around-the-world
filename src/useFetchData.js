import { useEffect, useState } from "react";

export const useFetchData = () => {
    const [countriesList, setCountriesList] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => {
          setCountriesList(data);
          setFilteredCountries(data);
        })
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false));
    }, [])

    return { countriesList, filteredCountries, setFilteredCountries, isLoading, isError,}
}