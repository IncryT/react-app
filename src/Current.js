import React from "react";

export default function current() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="d-flex weather-temperature">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Clear"
            id="icon"
          />
          <div>
            <strong id="temperature">75</strong>
            <span className="units">
              <a href="#" className="active">
                °F
              </a>{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>
            Humidity: <span id="humidity">87</span>%
          </li>
          <li>
            Wind: <span id="wind">9</span> mph
          </li>
        </ul>
      </div>
    </div>
  );
}
