import logo from './logo.svg';
import './App.css';
import banner from "./img/banner.png";
import explorar from "./img/explorar.png";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Discord from "./components/discord/discord";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='banner-element'>
        <div className='img-banner'>
            <img src={banner} alt='banner'/>
        </div>
        <div className='element-textBanner'>
          <div className='banner-text'>
            <h1>OLÁ,ESTUDANTE</h1>
            <span>Sejam bem-vindo à Galera do TI, o espaço criado para esclarecer dúvidas
            com apenas um clique!</span>
          </div>
            <button>explorar<img src={explorar}/></button>
        </div>
      </div>
    </div>
  );
}

export default App;
