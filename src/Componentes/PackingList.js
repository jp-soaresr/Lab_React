function Item({ name, isPacked}) {
    let itemContent = name;
    if(isPacked) {
        itemContent = (<del>{name+'✔'}</del>)
    }
    return (
        <li className="item">
            {itemContent}
        </li>
    )
}

export default function PackingList(){
    return(
        <section>
            <h2>Lista de Itens de Sally Rede</h2>
            <ul>
                <Item isPacked={true} name="Traje Espacial" />
                <Item isPacked={true} name="Capacete com folha dourada" />
                <Item isPacked={false} name="Foto de Tam" />
            </ul>
        </section>
    )
}