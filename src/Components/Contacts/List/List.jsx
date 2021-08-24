import React from 'react';
// import PropTypes from 'prop-types';
import { FiPhone } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { ListContainer, ListItem, Button } from './contactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../../redux/actions';

export default function ContactList(/*{ contacts, onDeleteContact }*/) {
 
  const getVisibleContact = (allContacts, filter) => {
    const normalFilter = filter.toLowerCase();
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter)
    );
  }
  const contacts = useSelector(({contacts:{items, filter}}) => getVisibleContact(items,filter));

  const dispatch = useDispatch();
  
  return (
    <ListContainer>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <FiPhone />
          {name}: {number}
          <Button onClick={() => dispatch(contactsActions.deleteContact(id))}>
            <AiFillDelete />
            Delete
          </Button>
        </ListItem>
      ))}
    </ListContainer>
  )
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     }),
//   ),
//   onDeleteContact: PropTypes.func,
// };
