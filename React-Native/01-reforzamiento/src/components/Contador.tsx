import React, { useState } from 'react'

export const Contador = () => {

  const [Valor, setValor] = useState(0)
  const acumular = (number:number) => {
    setValor(Valor + number);
  }

  return (
    <>
      <h3>Contador: {Valor}</h3>
      <button
        className='btn btn-primary'
        onClick={ () => acumular(1) }>
        +1
      </button>
      &nbsp;
      <button
        className='btn btn-danger'
        onClick={ () => acumular(-1) }>
        -1
      </button>

    </>
  )
}
