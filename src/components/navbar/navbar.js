import "./navbar.css";
import logo from "../../img/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
    return (
        <div className="nav1">
            <header className="navbar1">
                <div className="logo">
                    <img src={logo} alt="logo" />  {}
                </div>
                <div className="menu-navbar1">
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