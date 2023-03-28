import { Component } from 'react';
import { Box } from 'components/Box/Box';
import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
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

  formSubmitHandler = newContact => {
    let isName = this.isNameExists(newContact);
    let isNumber = this.isNumberExists(newContact);

    if (!isName & !isNumber) {
      this.setState(prev => ({
        contacts: [...prev.contacts, newContact],
      }));
      return;
    }
    alert(
      `This  ${isName ? `contact ${isName.name}` : ''} ${
        isNumber ? `number ${isNumber.number}` : ''
      } already exists`
    );

    // this.setState(prev => ({
    //   contacts: [
    //     ...prev.contacts.filter(
    //       contact =>
    //         contact.name !== newContact.name &&
    //         contact.number !== newContact.number
    //     ),
    //     newContact,
    //   ],
    // }));
    // console.log('App -> state:', this.state);
  };

  isNameExists = newContact =>
    this.state.contacts.find(contact => contact.name === newContact.name);

  isNumberExists = newContact =>
    this.state.contacts.find(contact => contact.number === newContact.number);

  deleteContact = id => {
    this.setState(prev => ({
      contacts: [...prev.contacts.filter(contact => contact.id !== id)],
    }));
  };
  changeFilter = e => {
    const { value } = e.target;

    this.setState({ filter: value.toLowerCase() });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <Box mx="auto" my={0} px="0" py={4} bg="container">
        <Section title="Phonebook">
          <ContactForm formSubmitHandler={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          {this.state.contacts.length !== 0 && (
            <>
              <Filter filter={filter} changeFilter={this.changeFilter} />
              <ContactList
                contacts={filteredContacts}
                deleteContact={this.deleteContact}
              />
            </>
          )}
        </Section>
      </Box>
    );
  }
}

export default App;
