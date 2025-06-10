// ContactList.js
export default function ContactList({
  selectedContact,
  contacts,
  onSelect
}) {

  // --- Estilos ---
  const contactListSectionStyle = {
    flex: '1 1 30%', // Ocupa 30% do espaço
    backgroundColor: '#f5f7fa',
    borderRight: '1px solid #ccc',
    overflowY: 'auto', // Adiciona scroll se necessário
  };

  const ulStyle = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  };

  const buttonStyle = (isSelected) => ({
    width: '100%',
    padding: '15px 20px',
    border: 'none',
    textAlign: 'left',
    cursor: 'pointer',
    fontSize: '16px',
    backgroundColor: isSelected ? '#007bff' : 'transparent',
    color: isSelected ? 'white' : 'black',
    borderBottom: '1px solid #eee',
  });

  return (
    <section style={contactListSectionStyle}>
      <ul style={ulStyle}>
        {contacts.map(contact =>
          <li key={contact.email}>
            <button
              style={buttonStyle(contact.email === selectedContact.email)}
              onClick={() => {
                onSelect(contact);
              }}
            >
              {contact.name}
            </button>
          </li>
        )}
      </ul>
    </section>
  );
}