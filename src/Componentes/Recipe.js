function Recipe({ drinkers}) {
    return (
        <ol>
            <li>Boil {drinkers} cups of water.</li>
            <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons</li>
            <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste</li>
        </ol>
    );
}

export default function PrepareMode() {
    return(
        <section>
            <h2>Spiced Chai Recipe</h2>
            <h3>For two</h3>
            <Recipe drinkers={2} />
            <h3>For a gathering</h3>
            <Recipe drinkers={4} />
        </section>
    );
}