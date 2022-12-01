import { useState } from "react";
import { GetWeather } from "./getWeather";

export function Countries() {
  let countriesUrl = "https://countriesnow.space/api/v0.1/countries";
  let [countries, setCountries] = useState([]);
  let [countriesSliced, setCountriesSliced] = useState([]);
  let [start, setStart] = useState(0);
  let [cities, setCities] = useState([]);
  return (
    <div>
      <button
        onClick={() => {
          fetch(countriesUrl)
            .then((res) => res.json())
            .then((out) => {
              setCountries(out.data);
              setCountriesSliced(countries.slice(start, start + 10));
            });
        }}
      >
        getCountries
      </button>
      <div>
        {countriesSliced &&
          countriesSliced.map((tag) => (
            <li>
              <button
                id={tag.country}
                onClick={() => {
                  console.log(tag.cities);
                  setCities(tag.cities);
                }}
              >
                {tag.country}
              </button>
            </li>
          ))}
      </div>
      <button
        onClick={() => {
          if (start) {
            setStart(start - 10);
            setCountriesSliced(countries.slice(start, start + 10));
          }
        }}
      >
        get previous
      </button>

      <button
        onClick={() => {
          if (start < 290) {
            setStart(start + 10);
            console.log(start);
            setCountriesSliced(countries.slice(start, start + 10));
          }
        }}
      >
        get next
      </button>
      {cities && cities.map((city) => <GetWeather city={city} />)}
    </div>
  );
}
