function Recipe({ drinkers }) {
    return (
        <ol>
            <li>Ferva {drinkers} xícaras de água.</li>
            <li>Adicione {drinkers} colheres de chá e {0.5 * drinkers} colheres</li>
            <li>Adicione {0.5 * drinkers} xícaras de leite para ferver e açúcar a gosto</li>
        </ol>
    );
}

export default function PrepareMode() {
    return (
        <section>
            <h2>Receita de Chá com Especiarias</h2>
            <h3>Para dois</h3>
            <Recipe drinkers={2} />
            <h3>Para um grupo</h3>
            <Recipe drinkers={4} />
        </section>
    );
}