import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
            fontFamily: 'Segoe UI, Arial, sans-serif'
        }}>
            {/* Cabeçalho */}
            <div style={{ marginBottom: 32, textAlign: 'center' }}>
                <h1 style={{ fontSize: 36, color: '#2d3748', margin: 0 }}>Página Inicial</h1>
                <p style={{ color: '#4a5568', fontSize: 18, marginTop: 8 }}>Bem-vindo ao seu laboratório de React!</p>
            </div>
            {/* Navegação */}
            <nav style={{ marginBottom: 32 }}>
                <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    display: 'flex',
                    gap: 24
                }}>
                    <li>
                        <Link to="/At01" style={{ textDecoration: 'none', color: '#3182ce', fontWeight: 'bold', fontSize: 18 }}>Semana 1</Link>
                    </li>
                    <li>
                        <Link to="/At02" style={{ textDecoration: 'none', color: '#3182ce', fontWeight: 'bold', fontSize: 18 }}>Semana 2</Link>
                    </li>
                    <li>
                        <Link to="/At03" style={{ textDecoration: 'none', color: '#3182ce', fontWeight: 'bold', fontSize: 18 }}>Semana 3</Link>
                    </li>
                    <li>
                        <Link to="/At04" style={{ textDecoration: 'none', color: '#3182ce', fontWeight: 'bold', fontSize: 18 }}>Semana 4</Link>
                    </li>
                    <li>
                        <Link to="/At05" style={{ textDecoration: 'none', color: '#3182ce', fontWeight: 'bold', fontSize: 18 }}>Semana 5</Link>
                    </li>
                </ul>
            </nav>
            {/* Rodapé */}
            <footer style={{ color: '#718096', fontSize: 14, marginTop: 'auto', padding: 16 }}>
                &copy; {new Date().getFullYear()} Meu App React
            </footer>
        </div>
    );
};

export default Home;