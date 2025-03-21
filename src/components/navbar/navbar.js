import "./navbar.css";
import logo from "../../img/logo.png";

function Navbar() {
    return (
        <div className="nav">
            <header className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo" />  {/* Feche corretamente a tag img */}
                </div>
                <div className="menu-navbar">
                    <ul>
                        <li><a className="home" href="#">Home</a></li>
                        <li><a href="#">Professores</a></li>
                        <li><a href="#">Horarios</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Equipe</a></li>
                        <li><a href="#">Tecnologias</a></li>
                        <li><a href="#">Latech</a></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Navbar;