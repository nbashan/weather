import { useState } from "react";
import { Countries } from "./Countries";

// function PettyJson(props) {
//   let tag = props.tag;
//   let temp_data = [];
//   for (let key in tag) {
//     console.log(key, tag[key]);
//     temp_data.push(
//       <tr>
//         <td>{key}</td>
//         <td>{tag[key]}</td>
//       </tr>
//     );
//   }
//   return temp_data.map((elem) => elem);
// }

export function GetWeather(props) {
  let [city, setCity] = useState(props.city);
  let [ret, setRet] = useState("");
  return (
    <div className="page">
      <button
        className="city"
        onClick={() => {
          let url =
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&appid=0d0f6b3be8ad69243c515498b9c6be72";
          fetch(url)
            .then((res) => res.json())
            .then((out) => {
              console.log(out);
              setRet(out);
            });
        }}
      >
        {props.city} weather
      </button>
      {ret && (
        <div>
          <h1>lon: {ret.coord.lon}</h1>
          <h1>lat: {ret.coord.lat}</h1>
        </div>
      )}
    </div>
  );
}
