import React from "react";
import Image from "next/image";
// import module from "../styles/Home.module.css";

const Weather = ({ data }) => {
  // console.log(data)
  
  var iconCode = data.weather[0].icon;

  return (
    <div
      className="position-relative d-flex flex-column  justify-content-around w-100   text-dark fw-bolder border rounded-4 "
      style={{ zIndex: 1 }}
    >
      {/* top part */}
      <div className="justify-content-center  d-flex ">
        <div>
          <Image
            src={`http://openweathermap.org/img/wn/${iconCode}@2x.png`}
            alt="/"
            width="200"
            height="200"
          />
          <p className="fs-1 text-light ">{data.weather[0].main}</p>
        </div>
        <p className="fs-1 text-light ">{data.main.temp.toFixed(0)}&#176;</p>
      </div>
      {/* Buttom */}
      <div className="bg-dark bg-opacity-25 fs-3 text-center text-light position-relative  ">
        <p className="fs-1">Weather in {data.name}</p>
        <div>
          <div className="d-flex justify-content-around">
            <p>Feels Like</p>
            <p>{data.main.feels_like.toFixed(0)}&#176;</p>
          </div>
          <div className="d-flex justify-content-around">
            <p>Humidity</p>
            <p>{data.main.humidity}%</p>
          </div>
          <div className="d-flex justify-content-around">
            <p>Winds</p>
            <p>{data.wind.speed.toFixed(0)}Km/h</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
