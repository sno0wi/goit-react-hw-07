import Contact from '../Contact/Contact.jsx';
import { selectContacts } from '../../redux/contactsReducer.js';
// import { selectNameFilter } from '../../redux/filtersReducer.js';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  // const nameContactFilter = useSelector(selectNameFilter);
  // const filteredContacts = contacts.filter(contact =>
  //   contact.text.name.toLowerCase().includes(nameContactFilter.toLowerCase())
  // );

  return (
    <>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </>
  );
};

export default ContactList;
