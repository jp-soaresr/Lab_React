// ShapeEditor.js
import { useState } from 'react';

// Estilos
const containerStyle = { display: 'flex', justifyContent: 'center', padding: '40px 20px', backgroundColor: '#f0f2f5', fontFamily: 'sans-serif' };
const cardStyle = { backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '400px' };
const buttonStyle = { width: '100%', padding: '10px 15px', border: 'none', borderRadius: '4px', backgroundColor: '#6f42c1', color: 'white', cursor: 'pointer', fontSize: '16px' };
const canvasStyle = {
    position: 'relative',
    height: '200px',
    marginTop: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
};

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 50 },
  { id: 1, type: 'square', x: 150, y: 50 },
  { id: 2, type: 'circle', x: 250, y: 50 },
];

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        return shape;
      } else {
        return { ...shape, y: shape.y + 50 };
      }
    });
    setShapes(nextShapes);
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <button style={buttonStyle} onClick={handleClick}>
          Move circles down!
        </button>
        <div style={canvasStyle}>
          {shapes.map(shape => {
            const shapeStyle = {
                position: 'absolute',
                left: shape.x,
                top: shape.y,
                background: 'purple',
                borderRadius: shape.type === 'circle' ? '50%' : '0',
                width: 20,
                height: 20,
                transition: 'top 0.5s' // Animação suave
            };
            return <div key={shape.id} style={shapeStyle} />
          })}
        </div>
      </div>
    </div>
  );
}