import Contact from '../Contact/Contact.jsx';
import { selectContacts } from '../../redux/contactsReducer.js';
import { selectNameFilter } from '../../redux/contactsReducer.js';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from '../../redux/contactsReducer.js';
import Loader from '../Loader/Loader.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const nameContactFilter = useSelector(selectNameFilter);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(nameContactFilter.toLowerCase())
  );

  return (
    <>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </>
  );
};

export default ContactList;
