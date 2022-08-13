import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  description,
  setDescription,
  onSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label for="title">Title of Appointment</label>
        <input 
          type="text"
          value={title}
          aria-label="Fill in title of appoinment"
          placeholder="Title"
          id="titleInput"
          onChange={(e)=>{setTitle(e.target.value)}}
          required 
        />

        <label for='description'>Description</label>
        <input 
          type="text"
          value={description}
          aria-label="Fill in title of appoinment"
          placeholder="Description (Optional)"
          id="descriptionInput"
          onChange={(e)=>{setDescription(e.target.value)}} 
        />

        <label for='date'>Date</label>
        <input 
          type="text"
          value={date}
          aria-label="Fill in date of appoinment"
          placeholder="Date"
          id="dateInput"
          min={getTodayString()}
          onChange={(e)=>{setDate(e.target.value)}} 
        />

        <label for='time'>Time</label>
        <input 
          type="text"
          value={time}
          aria-label="Fill in time of appoinment"
          placeholder="Time"
          id="timeInput"
          onChange={(e)=>{setTime(e.target.value)}} 
        />

        <label for='contact'>Contact</label>
        <ContactPicker 
          contact={contact} 
          setContact={setContact}
          contacts={contacts}
          onChange={(e)=>{setContact(e.target.value)}} 
        />
        
        <input type="submit" value="submit" />

      </form>
    </div>
  );
};
