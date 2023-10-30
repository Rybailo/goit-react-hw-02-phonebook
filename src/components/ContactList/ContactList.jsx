import React, { Component } from 'react';
import css from './ContactList.module.css';

export class ContactList extends Component {
  render() {
    const { contacts, handleDeleteProduct } = this.props;
    return (
      <div>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}
              {contact.number}
              <button
                className={css.btn}
                onClick={() => handleDeleteProduct(contact.id)}
                type="button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
