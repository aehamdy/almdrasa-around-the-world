import { useParams } from "react-router-dom";
import { useFetchData } from "../useFetchData";

const Country = () => {
  const { country } = useParams();
  const { result, isLoading, isError } = useFetchData(country);
  console.log(result);

  return (
    <>
      <div className="">
        <link
          to="/"
          className="mb-16 inline-block rounded-md bg-white p-3 md:mb-20"
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="call-made">
              <path
                id="Shape"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.8922 3.53553L7.07071 4.71405L3.18162 8.60313L18.0309 8.60313L18.0309 10.253L3.18162 10.253L7.07071 14.1421L5.8922 15.3206L-0.000355655 9.42809L5.8922 3.53553Z"
                fill="#111827"
              />
            </g>
          </svg>
        </link>
      </div>
      <p>{country}</p>
    </>
  );
};

export default Country;
