import React from "react";

export const ContactForm = ({
  name,
  setName,
  number,
  setNumber,
  email,
  setEmail,
  onSubmit,
  address,
  setAddress
}) => {
  return (
    <div>
      <form 
        onSubmit={onSubmit} >
        <label for="name">Name</label>
        <input 
          type='text'
          aria-label='fill in name'
          placeholder="Name"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          required
        />
        <label for="phone-number">US Phone Number (Area Code Must Be Included)</label>
        <input
          type="text"
          aria-label="fill in phone number"
          placeholder="Phone Number"
          value={number} 
          pattern='[1]?[/-]?[0-9]{3}[-/]?[0-9]{3}[-/]?[0-9]{4}'
          onChange={(e)=>{setNumber(e.target.value)}}
          required
        />
        <label for="email">Email Address</label>
        <input 
          type='text'
          aria-label='fill in email address'
          placeholder='Email'
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}} 
        />
        <label for="address">Address</label>
        <input
          type='text'
          aria-label="fill in address"
          placeholder="Address"
          value={address}
          onChange={(e)=>{setAddress(e.target.value)}} 
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};
