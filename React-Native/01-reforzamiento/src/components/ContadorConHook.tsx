import { useCounter } from '../hooks/useCounter';

export const ContadorConHook = () => {

  const {valor, acumular} = useCounter(5);

  return (
    <>
      <h3>Contador con Hook: {valor}</h3>
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
