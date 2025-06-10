import { useState } from 'react';

export default function FormTicket() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + ' ' + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    setFullName(firstName + ' ' + e.target.value);
  }

  // --- Estilos para o componente ---
  const formContainerStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '400px',
    margin: '40px auto',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    backgroundColor: '#f8f9fa',
    border: '1px solid #dee2e6',
  };

  const h2Style = {
    textAlign: 'center',
    color: '#343a40',
    marginBottom: '24px',
  };
  
  const inputContainerStyle = {
    marginBottom: '16px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '8px',
    color: '#495057',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    boxSizing: 'border-box', // Garante que padding não afete a largura total
  };

  const paragraphStyle = {
    marginTop: '24px',
    textAlign: 'center',
    color: '#212529',
  };

  return (
    <div style={formContainerStyle}>
      <h2 style={h2Style}>Let's check you in</h2>
      
      <div style={inputContainerStyle}>
        <label style={labelStyle}>
          First name:
          <input
            style={inputStyle}
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </label>
      </div>

      <div style={inputContainerStyle}>
        <label style={labelStyle}>
          Last name:
          <input
            style={inputStyle}
            value={lastName}
            onChange={handleLastNameChange}
          />
        </label>
      </div>

      <p style={paragraphStyle}>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </div>
  );
}