import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name}is ${response.data.main.temp} C`
    );
  }

  let apiKey = "094780c710fa4efd669f0df8c3991927";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return <h3> My First React Weather App 🌎</h3>;
}
