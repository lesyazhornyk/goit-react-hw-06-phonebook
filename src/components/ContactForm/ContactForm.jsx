import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { StyledForm, StyledField } from './ContactForm.styled';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (name, number) => {
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const id = Math.random().toString(16).slice(2);

    dispatch(addContact({ id, name, number }));
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, { resetForm }) => {
        handleSubmit(values.name, values.number);
        resetForm();
      }}
    >
      <StyledForm>
        <label htmlFor="name">Name</label>
        <StyledField name="name" type="text" required />
        <label htmlFor="number">Number</label>
        <StyledField name="number" type="tel" required />
        <button type="submit">Add Contact</button>
      </StyledForm>
    </Formik>
  );
};

export default ContactForm;
