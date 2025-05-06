import React, { useState, useEffect } from 'react';

export default function Relogio() {

    const [hora, setHora] = useState('');

    // Função para atualizar a hora
    const atualizarHora = () => {
        const agora = new Date();

        let horas = agora.getHours().toString().padStart(2, '0');
        let minutos = agora.getMinutes().toString().padStart(2, '0');
        let segundos = agora.getSeconds().toString().padStart(2, '0');

        setHora(`${horas}:${minutos}:${segundos}`);
    };

    // useEffect para atualizar a hora a cada segundo
    useEffect(() => {
        const intervalo = setInterval(atualizarHora, 1000); // Atualiza a cada segundo
        atualizarHora(); // Atualiza imediatamente ao carregar

        return () => clearInterval(intervalo); // Limpa o intervalo quando o componente for desmontado
    }, []);

    return (
        <>
            <h2>meu relogio</h2>
            <p>{hora}</p>
        </>
    );
}
