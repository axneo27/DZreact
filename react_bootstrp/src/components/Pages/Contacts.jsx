import React from 'react'
import {createStore} from 'redux'
import {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const initialState = {
  contactList: []
};

const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('contactList', serializedState);
  } catch (e) {
    console.error("Could not save state to local storage", e);
  }
};

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('contactList');
    if (serializedState === null) {
      return undefined;
    }
    console.log(serializedState);
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load state from local storage", e);
    return undefined;
  }
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contactList: [...state.contactList, action.payload]
      };
    case 'REMOVE_CONTACT':
      return {
        ...state,
        contactList: state.contactList.filter(contact => contact.id !== action.payload)
      };
    case 'CLEAR_CONTACT_LIST':
      return {
        ...state,
        contactList: []
      };
    case 'SET_INITIAL_STATE':
      return {
        ...state,
        contactList: action.payload.contactList
      }
    default:
      return state;
  }
}
const store = createStore(contactReducer);

const AddContact = () => {
  const [contactName, setContactName] = useState('');
  const [contactSurname, setContactSurname] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const addContact = () => {
    const newContact = { id: Date.now(), name: contactName, surname: contactSurname, number: contactNumber };
    store.dispatch({ type: 'ADD_CONTACT', payload: newContact });
    setContactName('');
    setContactSurname('');
    setContactNumber('');

    console.log(store.getState());
    saveStateToLocalStorage(store.getState());
  };

  return (
    <div>
      <div style={{padding: '20px'}}>
        <input
          type="text"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
          placeholder="Contact Name"
        />
        <input
          type="text"
          value={contactSurname}
          onChange={(e) => setContactSurname(e.target.value)}
          placeholder="Contact Surname"
        />
        <input
          type="number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          placeholder="Contact phone number"
        />
      </div>
      <div style={{marginLeft: '20px'}}>
        <button onClick={addContact}>Add contact</button> <ClearContactsListButton />
      </div>
    </div>
  );
};

const ClearContactsListButton = () => {
  const clearContactList = () => {
    store.dispatch({ type: 'CLEAR_CONTACT_LIST' });
    saveStateToLocalStorage(store.getState());
  };

  return (
    <button onClick={clearContactList}>Clear contact list</button>
  );
}

const ContactList = () => {
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    const loadedState = loadStateFromLocalStorage();
    if (loadedState) {
      store.dispatch({ type: 'SET_INITIAL_STATE', payload: loadedState });
      setContactList(loadedState.contactList);
      console.log(store.getState());
    }

    const unsubscribe = store.subscribe(() => {
      setContactList(store.getState().contactList);
      
      localStorage.setItem('contactList', JSON.stringify(store.getState().contactList));
    });

    return () => unsubscribe();
  }, []);

  return (
    <div style={{ margin: '20px' }}>
      <ul>
        {contactList.map(contact => (
          <li key={contact.id}>
            <Card style={{ width: '200px' }}>
              <Card.Body>
                <Card.Title>Name: {contact.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Surname: {contact.surname}</Card.Subtitle>
                <Card.Text>
                  Phone number: {contact.number}
                </Card.Text>

                <Button variant='danger' onClick={() => {
                  store.dispatch({ type: 'REMOVE_CONTACT', payload: contact.id });
                  saveStateToLocalStorage(store.getState());
                }}>
                  Remove
                </Button>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Contacts = () => {

  return (
    <div style={{  
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      }}>
      <h1>Contacts</h1>
      <AddContact />
      <ContactList />
    </div>
  )
}

export default Contacts;
