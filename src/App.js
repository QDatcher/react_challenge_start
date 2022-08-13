import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
 
  const defaultContacts = [
    {
      name: 'T-Pain',
      number: '7032240215',
      email: 'buyuadrink@gmail.com',
      address: '2453 Bartender Ln'
    },
    {
      name: 'Monkey D. Luffy',
      number: '2027852354',
      email: 'futurepirateking@gmail.com',
      address: 'The Thousand Sunny'
    },
    {
      name: 'Kendrick Lamar',
      number: '3106670934',
      email: 'imintherapynow@yahoo.com',
      address: 'California'
    }
  ]
  const [ contacts, setContacts ] = useState(defaultContacts);

  const [ appointments, setAppointments] = useState([])



  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };


  const addContact = (name, number, email, address) => {
    const contact = {
      name: name,
      number: number,
      email: email,
      address: address
    };
    
    setContacts((prev)=>[...prev, contact])
   
  }

  const addAppointment = (title, contact, date, time, description ) => {
    
    const appointment = {
      title: title,
      contact: contact,
      date: date,
      time: time,
      description: description
    }

    setAppointments((prev)=> [...prev, appointment])
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage appointments={appointments} addAppointment={addAppointment} contacts={contacts} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
