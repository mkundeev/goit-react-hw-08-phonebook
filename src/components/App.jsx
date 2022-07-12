import { useState, useMemo } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Header from './Header';
import Container from './Container';
import RegistrationForm from './RegistrationForm';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contactsAPI';

function App() {
  const [filter, setFilter] = useState('');
  const { data } = useGetContactsQuery();

  const [addContact] = useAddContactMutation();

  const formSubmit = contact => {
    if (data.some(({ name }) => name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    addContact(contact);
  };

  const filteredContacts = useMemo(() => {
    if (!data) {
      return;
    }
    const normilizedFilter = filter.toLowerCase();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  }, [data, filter]);

  return (
    <div>
      <Header />
      <Container>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={formSubmit} />
        <RegistrationForm onSubmit={formSubmit} registration />
      </Container>
      <Container>
        <h2>Contacts</h2>
        <Filter changeFilter={setFilter} />
      </Container>
      <Container style={{ position: 'relative' }}>
        {filteredContacts?.length > 0 && (
          <ContactList contacts={filteredContacts} />
        )}
      </Container>
    </div>
  );
}

export { App };
