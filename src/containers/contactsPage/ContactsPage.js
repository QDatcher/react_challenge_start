import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
 
  const [ name, setName ] = useState('');
  const [ number, setNumber ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ address, setAddress ] = useState('');
  const [ duplicate, setDuplicate ] = useState(false)
  


  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log(props.contacts)
    if(!duplicate){
      props.addContact(name, number, email, address)
      setName('')
      setNumber('')
      setEmail('')
      setAddress('')
    }
    console.log(props.contacts)
  };

  
  useEffect(()=>{
    const isItADuplicate = () =>{
      for(const contact of props.contacts){

        if(contact.name === name){
          
          return true;
        } 
      }
    }

    if(isItADuplicate()){
      setDuplicate(true)
      alert('This name has already been used')
    } else {
      setDuplicate(false)
    }
  }, [name, address, email, number, props.contacts])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          onSubmit={handleSubmit}
          name={name}
          setName={setName}
          address={address}
          setAddress={setAddress}
          email={email}
          setEmail={setEmail}
          number={number}
          setNumber={setNumber}
          duplicate={duplicate}  />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList info={props.contacts} />
      </section>
    </div>
  );
};
