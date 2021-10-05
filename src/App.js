import React from 'react';
import './herramientas/css/App.css';
import irelia from './herramientas/img/anime-11.gif';

function App() {
  return (
    <div className="container">
      <div class="left">
        
        <div class="base">
          <p>Base</p>
        </div>

        <div class="connect">
          <h1>Connect to people</h1>
          <p> Sign up for out beta list to learn more.</p>
        </div>

        <div class="email">
          <div>
          <input placeholder="Enter your email..."></input>
          </div>
          <div>
          <button>START </button>
          </div>
          </div>
      </div>
      
      <div class="center">
        <button>▶</button>
      </div>

      <div class="right">
        <div class="header">
            <b><p><a class="header" href="www.#">HOME</a></p></b>
            <b><p><a class="header" href="www.#">INFORMATION</a></p></b>
            <b><p><a class="header" href="www.#">PARTNERS</a></p></b>
            <b><p><a class="header" href="www.#">CONTACT</a></p></b>
        </div>
        <div class="vid">
          <img src={anime} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;