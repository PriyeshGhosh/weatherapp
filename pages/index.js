import Head from "next/head";
import Image from "next/image";
// import styles from '../styles/Home.module.css'
import axios from "axios";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import getConfig from "next/config";
import Weather from "../components/Weather";
import Spinner from "../components/Spinner";
import Form from 'react-bootstrap/Form';
import  Button from 'react-bootstrap/Button';

const { publicRuntimeConfig } = getConfig();

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${publicRuntimeConfig.apikey}`;
  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
    });
    setCity("");
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <Head>
          <title>Weather App</title>
        </Head>
        {/* Overlay */}
        <div
          className="position-absolute w-100 h-100 bg-dark opacity-25 "
          style={{ zIndex: 1 }}
        />

        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1496450681664-3df85efbd29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          layout="fill"
          className="object-cover"
        />

        {/* search form */}
        <div
          className="position-relative d-flex justify-content-center w-75 p-4 m-auto  text-center  "
          style={{ zIndex: 1 }}
        >
          <form
            onSubmit={fetchWeather}
            className="d-flex justify-content-between text-light p-1 bg-light m-auto bg-danger bg-transparent border rounded-4  w-75 m-4 border-2 "
          >
            
            <div className="input-group">
            
              <input
                onChange={(e) => setCity(e.target.value)}
                className=" d-flex px-3 fw-bold fs-4 text-light bg-transparent border-0 container-fluid form-control me-2 "
                type="text"
                placeholder="Search City"
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch />
            </button>
          </form>

          
        </div>
        {weather.main && <Weather data={weather} />}
      </div>
    );
  }
}
