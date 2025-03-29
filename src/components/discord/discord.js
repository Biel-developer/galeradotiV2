import "./discord.css";
import logo from "../../img/Discord-img.jpg";
import 'animate.css';
import { useInView } from 'react-intersection-observer';

function Discord() {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3
  });

  return (
    <div className="discord-degrade" ref={ref}>
      <div className="discord-container">
        <div className={`discord-text ${inView ? "animate__animated animate__backInLeft" : ""}`}>
          <h4>ENTRE NO NOSSO SERVIDOR DO DISCORD !!</h4>
        </div>
        <div className="discord">
          <a href="https://discord.gg/KBUjSAeC" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="Discord" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Discord;
