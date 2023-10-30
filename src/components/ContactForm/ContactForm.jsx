import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleSubtit = event => {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;
    const contactData = {
      name,
      number,
      id: nanoid(),
    };
    this.props.addContacts(contactData);
    event.currentTarget.reset();
  };

  render() {
    return (
      <div>
        <p>Name</p>
        <form onSubmit={this.handleSubtit}>
          <label>
            <input
              type="text"
              name="name"
              pattern={
                "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              }
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <p>Number</p>
          <label>
            <input
              type="tel"
              name="number"
              pattern={
                '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}'
              }
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="onSubmit">Add contact</button>
        </form>
      </div>
    );
  }
}
