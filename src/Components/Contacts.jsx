import ContactCard from './ContactUserCard'

const Contacts = () => {
    
  
    return (
      <div>
        <h3>Contacts</h3>
        <ul>
          {ContactCard.map((Contacts) => (
            <li key={Contacts.id}>
              <h4>{Contacts.name}</h4>
              <p>{Contacts.jobTitle}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  



export default Contacts;