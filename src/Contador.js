import React, { useState } from 'react';

export default function ContadorGenero() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  // A lógica original permanece a mesma
  const total = homens + mulheres;
  const incrementarHomens = () => setHomens(homens + 1);
  const decrementarHomens = () => setHomens(homens > 0 ? homens - 1 : 0);
  const incrementarMulheres = () => setMulheres(mulheres + 1);
  const decrementarMulheres = () => setMulheres(mulheres > 0 ? mulheres - 1 : 0);

  // --- ÍCONES SVG ---
  const IconeMasculino = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#007bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3" />
      <line x1="12" y1="22" x2="12" y2="8" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );

  const IconeFeminino = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e64980" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3" />
      <line x1="12" y1="22" x2="12" y2="8" />
      <line x1="5" y1="15" x2="19" y2="15" />
    </svg>
  );
  
  // --- ESTILOS ---
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '500px',
    margin: '50px auto',
    padding: '20px',
    boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
    borderRadius: '12px',
    backgroundColor: '#fff',
    textAlign: 'center',
  };

  const countersWrapperStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '20px 0',
  };

  const genderBoxStyle = {
    padding: '20px',
    borderRadius: '10px',
    width: '180px',
    border: '1px solid #eee'
  };

  const h2Style = { color: '#333' };
  
  const countStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    margin: '10px 0',
  };

  const buttonStyle = {
    width: '40px',
    height: '40px',
    margin: '0 5px',
    borderRadius: '50%',
    border: '2px solid',
    background: 'white',
    fontSize: '24px',
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  const totalStyle = {
    marginTop: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <h2 style={h2Style}>Contador de Pessoas</h2>

      <div style={countersWrapperStyle}>
        {/* Contador Masculino */}
        <div style={{...genderBoxStyle, backgroundColor: '#f0f7ff'}}>
          <IconeMasculino />
          <h3 style={{color: '#007bff'}}>Homens</h3>
          <p style={{...countStyle, color: '#007bff'}}>{homens}</p>
          <div>
            <button style={{...buttonStyle, color: '#007bff', borderColor: '#007bff'}} onClick={incrementarHomens}>+</button>
            <button style={{...buttonStyle, color: '#007bff', borderColor: '#007bff'}} onClick={decrementarHomens}>-</button>
          </div>
        </div>

        {/* Contador Feminino */}
        <div style={{...genderBoxStyle, backgroundColor: '#fff0f6'}}>
          <IconeFeminino />
          <h3 style={{color: '#e64980'}}>Mulheres</h3>
          <p style={{...countStyle, color: '#e64980'}}>{mulheres}</p>
          <div>
            <button style={{...buttonStyle, color: '#e64980', borderColor: '#e64980'}} onClick={incrementarMulheres}>+</button>
            <button style={{...buttonStyle, color: '#e64980', borderColor: '#e64980'}} onClick={decrementarMulheres}>-</button>
          </div>
        </div>
      </div>

      <hr style={{border: 'none', borderTop: '1px solid #eee'}} />

      <div style={totalStyle}>
        <span>Total: </span>
        <span>{total}</span>
      </div>
    </div>
  );
}