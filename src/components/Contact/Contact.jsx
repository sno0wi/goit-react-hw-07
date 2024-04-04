import { IoIosContact } from 'react-icons/io';
import { FaPhone } from 'react-icons/fa6';
import { deleteContacts } from '../../redux/contactsReducer';
import css from '../Contact/Contact.module.css';
import { useDispatch } from 'react-redux';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContacts(contact.id));
  };

  return (
    <div key={contact.id} className={css.item}>
      <p className={css.name}>
        <IoIosContact size={22} />
        {contact.name}
      </p>
      <p className={css.number}>
        <FaPhone />
        {contact.number}
      </p>
      <button type="button" className={css.btn} onClick={handleDeleteContact}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
