// Form.js (com estilos integrados)
import { useState } from 'react';

export default function Form() {
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  // Estado para controlar o efeito "hover" do botão
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  // --- Estilos em formato de objeto JavaScript ---

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
    fontFamily: 'sans-serif',
  };

  const cardStyle = {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '300px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px', // Espaço entre os elementos
  };
  
  const formGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px', // Espaço entre o label e o input/select
  };

  const labelStyle = {
    fontWeight: 'bold',
    color: '#333',
  };

  const inputStyle = {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    fontFamily: 'sans-serif', // Garante a mesma fonte do resto
  };
  
  const buttonStyle = {
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: isButtonHovered ? '#0056b3' : '#007bff', // Muda a cor no hover
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <form style={formStyle} onSubmit={handleSubmit}>
          
          <div style={formGroupStyle}>
            <label style={labelStyle}>
              To:
            </label>
            <select
              style={inputStyle}
              value={to}
              onChange={e => setTo(e.target.value)}>
              <option value="Alice">Alice</option>
              <option value="Bob">Bob</option>
            </select>
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>
              Message:
            </label>
            <textarea
              style={inputStyle}
              placeholder="Write your message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>

          <button 
            style={buttonStyle}
            type="submit"
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Send
          </button>

        </form>
      </div>
    </div>
  );
}