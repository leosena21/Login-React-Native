import { AccessDB } from 'react-indexed-db';
 
<AccessDB objectStore="people">
  {({ getByIndex }) => {
    const [person, setPerson] = useState(null);
    getByIndex('name', 'Dave').then(
      personFromDB => {
        setPerson(peopleFromDB);
      },
      error => {
        console.log(error);
      }
    );
    return <div>{person}</div>;
  }}
</AccessDB>;