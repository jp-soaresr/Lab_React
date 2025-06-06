// Form3.js (com estilos integrados)
import { useState } from 'react';

export default function Form3() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/SdlAgU0m.jpg',
    }
  });

  // --- Funções para atualizar o estado ---
  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value
    });
  }

  function handleTitleChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value
      }
    });
  }

  function handleCityChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value
      }
    });
  }

  function handleImageChange(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value
      }
    });
  }
  
  // --- Estilos ---
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px 20px',
    backgroundColor: '#f0f2f5',
    fontFamily: 'sans-serif',
  };

  const cardStyle = {
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '400px',
  };
  
  const formGroupStyle = {
    marginBottom: '16px',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '8px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    boxSizing: 'border-box',
  };
  
  const resultStyle = {
    marginTop: '20px',
  };
  
  const imageStyle = {
    marginTop: '16px',
    width: '100%',
    borderRadius: '4px',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Name:</label>
          <input style={inputStyle} value={person.name} onChange={handleNameChange} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Title:</label>
          <input style={inputStyle} value={person.artwork.title} onChange={handleTitleChange} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>City:</label>
          <input style={inputStyle} value={person.artwork.city} onChange={handleCityChange} />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Image:</label>
          <input style={inputStyle} value={person.artwork.image} onChange={handleImageChange} />
        </div>
        <p style={resultStyle}>
          <i>{person.artwork.title}</i>
          {' by '}
          {person.name}
          <br />
          (located in {person.artwork.city})
        </p>
        <img
          style={imageStyle}
          src={person.artwork.image}
          alt={person.artwork.title}
        />
      </div>
    </div>
  );
}