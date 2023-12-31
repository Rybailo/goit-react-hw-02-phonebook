import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  addContacts = contactData => {
    console.log('contactData:', contactData);
    const hasDuplicates = this.state.contacts.some(
      contact => contactData.name === contact.name
    );
    if (hasDuplicates) {
      alert(`${contactData.name} is already in contacts.`);
      return;
    }

    this.setState({
      contacts: [...this.state.contacts, contactData],
    });
  };
  handleFilterChange = event => {
    const value = event.target.value.toLowerCase();
    this.setState({
      filter: value,
    });
  };

  handleDeleteProduct = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };
  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = filter
      ? contacts.filter(contact => contact.name.toLowerCase().includes(filter))
      : contacts;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start-left',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm addContacts={this.addContacts} />
        <h2>Contacts</h2>
        <Filter handleInputChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          handleDeleteProduct={this.handleDeleteProduct}
        />
      </div>
    );
  }
}
