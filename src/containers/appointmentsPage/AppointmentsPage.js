import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
export const AppointmentsPage = (props) => {

  
  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ date, setDate ] = useState('')
  const [ time, setTime ] = useState('')
  const [ contact, setContact] = useState('No Contact')

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addAppointment(title, contact, description, date, time)
    setTitle('')
    setDescription('')
    setDate('')
    setTime('')
    setContact('No Contact') 
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          onSubmit={handleSubmit}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          contact={contact}
          setContact={setContact}
          contacts={props.contacts}  />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList info={props.appointments} />
      </section>
    </div>
  );
};
