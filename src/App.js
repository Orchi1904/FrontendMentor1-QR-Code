import React from 'react';
import { Helmet } from 'react-helmet';
import QrCode from '../src/images/image-qr-code.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />  {/*displays site properly based on user's device -->*/}
        <title>Frontend Mentor | QR code component</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit&display=swap" rel="stylesheet" />
      </Helmet >
      <main>
        <div className="appContainer">
          <img src={QrCode} alt="QR-Code to Frontend Mentor" />
          <h2>Improve your front-end skills by building projects</h2>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </main>
      <footer>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://github.com/Orchi1904" target="_blank">Alexej Kunz (Orchi1904)</a>.
        </div>
      </footer>
    </div >
  );
}

export default App;
