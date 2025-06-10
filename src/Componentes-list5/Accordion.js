import { useState } from 'react';

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  // --- Estilos para o componente ---
  const accordionContainerStyle = {
    maxWidth: '600px',
    margin: '40px auto',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    overflow: 'hidden', // Garante que os cantos arredondados sejam aplicados aos filhos
  };

  const h2Style = {
    fontSize: '24px',
    color: '#333',
    textAlign: 'center',
    padding: '20px',
    margin: 0,
    backgroundColor: '#f7f7f7',
  };


  return (
    <div style={accordionContainerStyle}>
      <h2 style={h2Style}>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is
        Kazakhstan's largest city. From 1929 to 1997,
        it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>,
        the Kazakh word for "apple" and is often translated
        as "full of apples". In fact, the region surrounding
        Almaty is thought to be the ancestral home of the
        apple, and the wild <i lang="la">Malus sieversii</i>
        is considered a likely candidate for the ancestor
        of the modern domestic apple.
      </Panel>
    </div>
  );
}

function Panel({
  title,
  children,
  isActive,
  onShow
}) {

  // --- Estilos para o Painel ---
  const panelStyle = {
    padding: '20px',
    borderTop: '1px solid #ddd',
    backgroundColor: '#fff',
  };

  const panelHeaderStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#555',
    margin: '0 0 15px 0',
  };
  
  const panelContentStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#666',
    margin: 0,
  };

  const buttonStyle = {
    border: '1px solid #007bff',
    borderRadius: '5px',
    backgroundColor: '#fff',
    color: '#007bff',
    padding: '10px 15px',
    fontSize: '14px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s, color 0.2s',
  };

  return (
    <section style={panelStyle}>
      <h3 style={panelHeaderStyle}>{title}</h3>
      {isActive ? (
        <p style={panelContentStyle}>{children}</p>
      ) : (
        <button 
          style={buttonStyle}
          // Efeito "hover" simples usando eventos do mouse
          onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#007bff';
              e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.color = '#007bff';
          }}
          onClick={onShow}
        >
          Show
        </button>
      )}
    </section>
  );
}