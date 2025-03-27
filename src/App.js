import React, { useEffect, useState } from 'react';
import './App.css';
import logo from './logo.svg';
import banner from "./img/banner.png";
import explorar from "./img/explorar.png";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Discord from "./components/discord/discord";
import Professor from "./Page/Professor/professor";
import Equipe from './components/equipe/equipe';
import 'animate.css';

function App() {
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimateText(true);
    }, 300); 
  }, []);

  return (
    <div className="App">
      <Navbar />

      <div className='banner-element'>
        <div className='img-banner'>
          <img src={banner} alt='banner' />
        </div>

        <div className='element-textBanner'>
          <div className='banner-text'>
            {animateText && (
              <div className="animate__animated animate__backInLeft">
                <h1>Olá, Estudantes!</h1>
              </div>
            )}
            {animateText && (
              <div className="animate__animated animate__backInRight">
                <span>
                  Sejam bem-vindos à Galera do TI, o espaço criado para esclarecer dúvidas com apenas um clique!
                </span>
              </div>
            )}
          </div>

          {animateText && (
            <button className="explore-btn animate__animated animate__backInUp">
              explorar <img src={explorar} alt="explorar" />
            </button>
          )}
        </div>
      </div>

      {animateText && (
        <>
          <div className="animate__animated animate__backInLeft">
            <Professor />
          </div>
          <div className="animate__animated animate__backInRight">
            <Equipe />
          </div>
          <div className="animate__animated animate__backInLeft">
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
