// import React, { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import React from 'react';
import { Container } from './App.styled';
import Title from './Title/Title';
import ContactForm from './Components/Contacts/Form/Form';
import ContactList from './Components/Contacts/List/List';
import Filter from './Components/Filter/Filter';

 function App() {

    return (
      <Container>
        <Title title={'Phonebook'} />
        <ContactForm />
        <Filter />
        <Title title={'Contacts'} />
        <ContactList />
      </Container>
    )
}

export default App;