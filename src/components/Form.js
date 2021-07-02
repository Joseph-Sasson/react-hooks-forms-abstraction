import React, { useState } from "react";

function Form() {
  const [form, setForm]=useState({
    first:'John',
    last:'Henry',
    admin:false
  })

  function handleChange(e){
    const name = e.target.name
    const value = e.target.value

    if (e.target.type === 'checkbox') {value = e.target.checked}

    setForm({...form, [name]:value })
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(form)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='first' onChange={handleChange} value={form.first} />
      <input type="text" name='last' onChange={handleChange} value={form.last} />
      <input type='checkbox' name='admin' onChange={handleChange} checked={form.admin} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
