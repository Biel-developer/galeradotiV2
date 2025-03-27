import "./latech.css";
import banner from "../../img/banner.png";

function Latech() {
    return (
            <div className="latech">
                <div className='img-banner'>
                    <img src={banner} alt='banner'/>
                </div>
                <div className='banner-text'>
                <h1>OLÁ,ESTUDANTE</h1>
                    <span>Sejam bem-vindo à Galera do TI, o espaço criado para esclarecer dúvidas
                    com apenas um clique!</span>
                </div>
            </div>
    );
}

export default Latech;
