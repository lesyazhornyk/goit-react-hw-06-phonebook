import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li>
      {name}: {number}
      <button onClick={handleClick}>Delete</button>
    </li>
  );
};

export default ContactListItem;
