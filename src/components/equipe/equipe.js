import React, { useState, useEffect } from 'react';
import data from '../../data/equipe.json';
import "./equipe.css";

function Equipe() {
  const [equip, setEquip] = useState([]);

  useEffect(() => {

    setTimeout(() => {
      setEquip(data);
    }, 1000);
  }, []);


  const primeiraLinha = equip.slice(0, 3);
  const segundaLinha = equip.slice(3, 6); 

  return (
    <div className='equipe-degrade'>
      <div className="equipe">
      <h4>Equipe</h4>
      <div className="equipe-grid">
        <div className="equipe-row">
          {primeiraLinha.map(equipe => (
            <div key={equipe.id} className="equipe-card">
              <img src={equipe.img} alt={equipe.nome} />
              <h2>{equipe.nome}</h2>
              <p>{equipe.cargo}</p>
            </div>
          ))}
        </div>

        <div className="equipe-row">
          {segundaLinha.map(equipe => (
            <div key={equipe.id} className="equipe-card">
              <img src={equipe.img} alt={equipe.nome} />
              <h2>{equipe.nome}</h2>
              <p>{equipe.cargo}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Equipe;