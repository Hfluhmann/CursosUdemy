import { useEffect, useRef, useState } from 'react';
import { ReqResListado, Usuario } from '../interfaces/resRes';
import { reqResAPI } from '../api/reqRes';



export const useUsuarios = () => {

  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const pageRef = useRef(1);
  
  useEffect(() => {
    //llamado a la API
    cargarUsuarios();
  }, [])
  
  
  const cargarUsuarios = async () => {
    const resp = await reqResAPI.get<ReqResListado>('/users', {
      params: {
        page: pageRef.current
      }
    })
    setUsuarios(resp.data.data);
  }

  const paginaAnterior = async() => {
    
    const resp = await reqResAPI.get<ReqResListado>('/users', {
      params: {
        page: pageRef.current-1
      }
    })

    if (pageRef.current > 1){
      pageRef.current--;
      cargarUsuarios();
    } else {
      alert('No hay mas registros');
    }

  }

  const paginaSiguiente = async() => {
    const resp = await reqResAPI.get<ReqResListado>('/users', {
      params: {
        page: pageRef.current + 1
      }
    })

    if ( pageRef.current < resp.data.total_pages) {
      pageRef.current++;
      cargarUsuarios();
    } else {
      alert('No hay mas registros');
    }
  }
  
  return {
    usuarios,
    paginaAnterior,
    paginaSiguiente,
  }
}