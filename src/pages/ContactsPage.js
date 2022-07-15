import { useState, useMemo } from 'react';
import { useGetContactsQuery, useAddContactMutation } from 'redux/contactsAPI';
import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Notification from 'components/Notification';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactsPage() {
  const [filter, setFilter] = useState('');

  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();
  const formSubmit = contact => {
    if (data.some(({ name }) => name === contact.name)) {
      toast.error(`${contact.name} is already in contacts`, {
        position: toast.POSITION.TOP_RIGHT,
      });
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
        {filteredContacts?.length === 0 && (
          <Notification message={'No contacts found'} />
        )}
      </Container>
      <ToastContainer theme="colored" autoClose={3000} />
    </div>
  );
}
