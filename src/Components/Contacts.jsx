import ContactUserCard from "./ContactUserCard";

// Contacts.jsx

function Contacts() {
  return (
    <>
      <ul>
        {" "}
        <h2>Contacts</h2>
        <li>
          <ContactUserCard />
        </li>
        <li>
          <ContactUserCard />
        </li>
        <li>
          <ContactUserCard />
        </li>
        <li>
          <ContactUserCard />
        </li>
      </ul>
    </>
  );
}

export default Contacts;
