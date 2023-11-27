import { Component } from 'react';
import { Wrapper } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Statistics } from './Statistics/Statistics';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = { contacts: [], name: '', number: '' };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.setState(({ contacts }) => ({ contacts: [...contacts, newContact] }));
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Wrapper>
        <Statistics />
        <h1>PhoneBook</h1>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <ContactList
          contacts={this.state.contacts}
          onChange={this.handleChange}
        />
      </Wrapper>
    );
  }
}
