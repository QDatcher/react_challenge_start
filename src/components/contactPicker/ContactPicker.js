import React from "react";

export const ContactPicker = (props) => {
  return (
    <select onChange={(e)=>{props.setContact(e.target.value)}}>
      <option 
        selected='selected'
        key={0}
        value='No Contact'
      > 
         No Contact
      </option>
      {props.contacts.map((contact, index)=>{
        return <option key={index + 1} value={contact.name} >{contact.name}</option>
      })}
    </select>
  );
};
