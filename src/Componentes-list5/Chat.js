// Chat.js
import { useState } from 'react';

export default function Chat({ contact }) {
  const [text, setText] = useState('');

  // --- Estilos ---
  const chatSectionStyle = {
    flex: '1 1 70%', // Ocupa 70% do espaço
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  };
  
  const chatHeaderStyle = {
    padding: '10px 20px',
    borderBottom: '1px solid #eee',
    fontSize: '14px',
    color: '#666',
  };

  const textareaStyle = {
    flexGrow: 1, // Faz a área de texto ocupar o espaço disponível
    border: 'none',
    padding: '20px',
    fontSize: '16px',
    resize: 'none', // Impede que o usuário redimensione
    outline: 'none', // Remove a borda azul ao focar
  };

  const buttonContainerStyle = {
    padding: '20px',
    borderTop: '1px solid #eee',
    backgroundColor: '#f5f7fa',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  return (
    <section style={chatSectionStyle}>
      <div style={chatHeaderStyle}>
        Chatting with <b>{contact.name}</b>
      </div>
      <textarea
        style={textareaStyle}
        value={text}
        placeholder={'Say something to ' + contact.name}
        onChange={e => setText(e.target.value)}
      />
      <div style={buttonContainerStyle}>
        <button style={buttonStyle}>
          Send to {contact.email}
        </button>
      </div>
    </section>
  );
}