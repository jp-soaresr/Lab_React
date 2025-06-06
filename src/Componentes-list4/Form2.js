// Form2.js (com estilos integrados)
import { useState } from 'react';

export default function Form2() {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  // A lógica para atualizar o estado continua a mesma 
  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value
    });
  }

  // --- Estilos em formato de objeto JavaScript ---

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px 20px', // Adiciona margem em cima/embaixo e dos lados
    backgroundColor: '#f0f2f5',
    fontFamily: 'sans-serif',
  };

  const cardStyle = {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '350px',
  };
  
  const formGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '16px', // Espaço entre os grupos de input
  };

  const labelStyle = {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '8px',
  };

  const inputStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    fontFamily: 'sans-serif',
  };

  const resultStyle = {
    marginTop: '20px',
    padding: '12px',
    backgroundColor: '#e9ecef',
    border: '1px solid #dee2e6',
    borderRadius: '4px',
    color: '#495057',
    wordWrap: 'break-word', // Garante que o email não quebre o layout
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        
        <div style={formGroupStyle}>
          <label style={labelStyle}>
            First name:
          </label>
          <input
            style={inputStyle}
            value={person.firstName}
            onChange={handleFirstNameChange}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>
            Last name:
          </label>
          <input
            style={inputStyle}
            value={person.lastName}
            onChange={handleLastNameChange}
          />
        </div>

        <div style={formGroupStyle}>
          <label style={labelStyle}>
            Email:
          </label>
          <input
            style={inputStyle}
            value={person.email}
            onChange={handleEmailChange}
          />
        </div>

        <p style={resultStyle}>
          {person.firstName}{' '}
          {person.lastName}{' '}
          ({person.email})
        </p>

      </div>
    </div>
  );
}