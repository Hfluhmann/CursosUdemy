import { useState } from 'react'

export const useCounter = (initial: number = 10) => {

  const [valor, setValor] = useState(initial)
  const acumular = (number: number) => {
    setValor(valor + number);
  }

  return{

    valor, //tambien se puede valor:valor para especificar que el atributo "vallor" tiene los datos de valor, pero aqui es redundante
    acumular, //lo mismo de arriba
  }

}
