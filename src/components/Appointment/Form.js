import React, { useState } from 'react'

import Button from "components/Button";

import InterviewerList from "components/InterviewerList";



export default function Form(props) {

  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  function handleChange(e) {
    setName(e.target.value)
  }

  function reset() {
    setName("");
    setInterviewer(null);
    return;
  }

  function cancel() {
    reset();
    props.onCancel()
  }

  const [error, setError] = useState("");

  function validate() {
    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }
  
    props.onSave(name, interviewer);
  }



  return(
    <main className="appointment__card appointment__card--create">
    <section className="appointment__card-left">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <input
          onChange={handleChange}
          value={name}
          className="appointment__create-input text--semi-bold"
          name="name" 
          type="text"
          placeholder="Enter Student Name"
          data-testid="student-name-input"
        />
      </form>
      <section className="appointment__validation">{error}</section>
      <InterviewerList interviewers={props.interviewers} value={interviewer} onChange={setInterviewer} />
    </section>
    <section className="appointment__card-right">
      <section className="appointment__actions">
        <Button 
        danger
        onClick={() => cancel()}
        >Cancel</Button>

        <Button
        confirm
        onClick={() => validate()}>Save</Button>
      </section>
    </section>
  </main>
  )
}