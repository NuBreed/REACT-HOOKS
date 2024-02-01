import React, { useState } from 'react'

const Object = () => {
  const [details, setDetails] = useState({ name: '', email: '' })
  const handleChangeName = (e) => {
    console.log(e.target.value)
    setDetails({ ...details, name: e.target.value })
  }
  const handleChangeEmail = (e) => {
    console.log(e.target.value)
    setDetails({ ...details, email: e.target.value })
  }
  return (
    <div>
      <div>{details.name}</div>
      <div>{details.email}</div>
      <form action=''>
        <input
          type='text'
          name=''
          id=''
          value={details.name}
          onChange={handleChangeName}
        />
        <input
          type='text'
          name=''
          id=''
          value={details.email}
          onChange={handleChangeEmail}
        />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Object
