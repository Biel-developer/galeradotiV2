import "./discord.css";
import logo from "../../img/Discord-img.jpg";

function Discord() {
    return (
        <div className="discord-container">
            <h1>ENTRE NO NOSSO SERVIDOR DO DISCORD !!</h1>
            <div className="discord">
                <a href="https://discord.gg/KBUjSAeC" target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt="Discord" />
                </a>
            </div>
        </div>
    );
}

export default Discord;