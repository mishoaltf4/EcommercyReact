import React from "react";
import "../Styles/Pages/home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-filter">
        <div className="container">
          <div className="home-inner"></div>
          <div className="home-inner__cont">
            <i>
              <h2>Newly Launched</h2>
              <h1>Kryo X26 MTB</h1>
              <h4>Specifications:</h4>
              <ul>
                <li>Lightweight 18" Frame</li>
                <li>Steel Suspension Fork</li>
                <li>Steel Hardtail Frame</li>
              </ul>
            </i>
            <button>Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
