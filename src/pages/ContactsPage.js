import { useState, useMemo } from 'react';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contactsAPI';
import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export default function ContactsPage() {
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
      <Container>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={formSubmit} />
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
