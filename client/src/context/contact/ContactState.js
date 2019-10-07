import React, { useReducer } from 'react';
import uuid from 'uuid';
import contactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Jills',
        email: 'jill@mail.com',
        phone: '111-111-111-111',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Ema Watson',
        email: 'ema@mail.com',
        phone: '111-111-111-112',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Sara Conor',
        email: 'sara@mail.com',
        phone: '111-111-111-113',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact

  // Delete contact

  // Set current contact

  // Clear current contact

  // Update current contact

  // Filter contact

  // Clear filter

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
