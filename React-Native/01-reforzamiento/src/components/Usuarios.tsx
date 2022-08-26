import { Usuario } from '../interfaces/resRes';
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {

  const {usuarios, paginaAnterior, paginaSiguiente} = useUsuarios();

  const renderItem = ({id, first_name, last_name, email, avatar}:Usuario) => {
    return(
      <tr key = {id.toString()}>
        <td>
          <img
          src={avatar}
          alt={first_name}
          style= {{
            width: 80,
            borderRadius:100,
          }}
          />
        </td>
        <td>{first_name} {last_name}</td>
        <td>{ email }</td>
      </tr>
    )
  }

  return (
    <>
      <h3>Usuarios:</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map( usuario => renderItem(usuario) )
          }
        </tbody>
      </table>
          
      <button
        className='btn btn-danger'
        onClick={ paginaAnterior }
      >
        anteriores
      </button>

        &nbsp;
      
      <button
        className='btn btn-success'
        onClick={ paginaSiguiente }
      >
        Siguientes
      </button>

    </>
  )
}
