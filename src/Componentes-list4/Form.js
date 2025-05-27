import {useState} from 'react';

export default function Form() {
    const [person, setPerson] = useState({
        firstName: 'Joao',
        lastName: 'Silva',
        email: 'joaoSilva@gmail.com',

});

function handFirstNameChange(e) {
    person.firstName = e.target.value;
}

function handLastNameChange(e) {
    person.lastName = e.target.value;
}

function handEmailChange(e) {
    person.email = e.target.value;
}

return (
    <>
    <label>
        Primeiro Nome:
        <input
            type="text"
            value={person.firstName}
            onChange={handFirstNameChange}
        />
    </label>

    <label>
        Sobrenome:
        <input
            type="text"
            value={person.lastName}
            onChange={handLastNameChange}
        />
    </label>
    <label>
        E-mail:
        <input
            type="email"
            value={person.email}
            onChange={handEmailChange}
        />
    </label>
    <p>
        {person.firstName} {''}
        {person.lastName} {''}
        ({person.email})
    </p>
    </>
);
}