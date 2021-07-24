import "./App.css";

import React, { Component } from "react";
import { nanoid } from "nanoid";

import AddContactForm from "./components/AddContactForm/AddContactForm.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import { PageWrapper } from "./components/PageWrapper/PageWrapper.styled.jsx";
import ContactFilter from "./components/ContactFilter/ContactFilter.jsx";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (name, number) => {
    if (this.state.contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return false;
    }
    this.setState((prevState) => ({
      contacts: [
        {
          id: nanoid(),
          name: name,
          number: number,
        },
        ...prevState.contacts,
      ],
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const rendedContact = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <PageWrapper>
        <AddContactForm onSubmit={this.addContact} />
        <ContactFilter filter={filter} onChange={this.handleChange} />
        {filter.length === 0 ? (
          contacts.length === 0 ? (
            <h1>You have not contacts saved</h1>
          ) : (
            <ContactList
              contacts={contacts}
              onDeleteContact={this.deleteContact}
            />
          )
        ) : (
          <ContactList
            contacts={rendedContact}
            onDeleteContact={this.deleteContact}
          />
        )}
      </PageWrapper>
    );
  }
}