import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Name } from './ContactForm/ContactForm.styled';
import { NameItem } from './ContactForm/ContactForm.styled';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        marginLeft: '2.5rem',
      }}
    >
      <Name>Phonebook</Name>
      <ContactForm />

      <NameItem>Contacts</NameItem>
      <Filter />
      <ContactList />
    </div>
  );
};
