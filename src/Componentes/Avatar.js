export default function Avatar() {
    const avatar ="https://i.imgur.com/7vQD0fPs.jpg"
    const description = "Gregorio Y. Zara"
    return(
        <>
        <h3>Avatar</h3>
        <img 
            className="avatar"
            src={avatar}
            alt={description}
        />
        </>
    )
}