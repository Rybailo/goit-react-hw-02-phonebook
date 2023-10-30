import React, { Component } from 'react';

export class Filter extends Component {
  render() {
    return (
      <div>
        <p>Find contacts by name</p>
        <label>
          <input
            type="tel"
            name="filter"
            pattern={
              "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            }
            onChange={this.props.handleInputChange}
            required
          />
        </label>
      </div>
    );
  }
}
