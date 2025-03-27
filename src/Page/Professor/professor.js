import "./professor.css";
import tatu from "../../img/tatuTremilique.jpg";
import github from "../../img/github-icon.png";
import linkedin from "../../img/linkedin-icon.png";

function Professor() {
    return (
            <div className="professor">
                <div className="professor-degrade">
                    <div className="foto-professor">
                        <img src={tatu} alt="Tatu Tremilique" />
                    </div>
                    <div>
                        <h1 className="nome">HUGO FUMAÇA</h1>     
                        <h2 className="descreicao">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h2>
                    </div>
                    <div className="icons"> 
                        <a href="#" className="github"><img src={github} alt="Github Icon" /></a>
                        <a href="#" className="linkedin"><img src={linkedin} alt="Linkedin Icon" /></a>
                    </div>
                </div>
            </div>
    );
}

export default Professor;
