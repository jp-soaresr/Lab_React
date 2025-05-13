import { getImageUrl } from "../utils";
import { people } from "../data";

export default function List() {
    const peoples = people.filter(person => person.profession);
    const listItems = peoples.map(person => {
        return <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' '+person.profession+' '}
                known for {person.accomplishment}
            </p>
        </li>
    });
    return <ol>{listItems}</ol>
}