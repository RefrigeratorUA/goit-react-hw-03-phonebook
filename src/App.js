import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactForm/ContactForm';
import PhonebookList from './PhonebookList/PhonebookList';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevState) {
    const { contacts: nowContacts } = this.state;
    const { contacts: prevContacts } = prevState;
    if (nowContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nowContacts));
    }
  }

  handleAddContact = (name, number) => {
    if (!name) return this.showNotification('Please enter contact name.');
    if (!number) return this.showNotification('Please enter contact number.');

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const { contacts } = this.state;
    const hasPresent = contacts.some(contact => contact.name === name);

    hasPresent
      ? this.showNotification(`${name} is already in contacts.`)
      : this.setState(prevState => {
          return { contacts: [...prevState.contacts, contact] };
        });
  };

  showNotification = message => alert(message);

  handleFilter = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()));
  };

  handleDeleteContact = id => {
    const { contacts } = this.state;
    this.setState({ contacts: [...contacts.filter(el => el.id !== id)] });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        {contacts.length > 1 && <Filter value={filter} onFilterChange={this.handleFilter} />}
        {filteredContacts.length > 0 && (
          <PhonebookList contacts={filteredContacts} onDelete={this.handleDeleteContact} />
        )}
      </>
    );
  }
}
