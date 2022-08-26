import React from 'react'
import { useState } from 'react';
import { useForm } from '../hooks/useForm';
export const Formularios = () => {

  const {email, password, formulario, onChange } = useForm({
    email: 'test@test.com',
    password: '123456',
  });

  return (
    <>
      <h3>Formularios</h3>
      <input
        type="text"
        className='form-control'
        placeholder='Email'
        value={ email }
        onChange = { (event) => onChange( event.target.value, 'email') }
      />

      <input 
        type="text"
        className='form-control mt-2 mb-2'
        placeholder='Password'
        value={password}
        onChange={(event) => onChange(event.target.value, 'password')}
      />

      <code>
        <pre>{ JSON.stringify( formulario, null, 2 ) }</pre>
      </code>
    </>
  )
}
