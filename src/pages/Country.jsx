import { useParams } from "react-router-dom";

const Country = () => {
  const { country } = useParams();
  return <p>{country}</p>;
};

export default Country;
