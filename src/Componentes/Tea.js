function Cup({ guest }) {
    return <p>Xícara de chá para convidado #{guest}</p>;
}

export default function TeaSet() {
    let cups = [];
    for (let i = 1; i <= 5; i++) {
        cups.push(<Cup key={i} guest={i} />);
    }
    return cups;
}