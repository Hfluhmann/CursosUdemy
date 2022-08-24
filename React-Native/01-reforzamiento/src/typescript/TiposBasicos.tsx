import { join } from 'path';
import React from 'react'

const nombre: string = "Hans";
const edad = 23;
const activo = true;
const poderes: string[] = [] //["volar", "invisibilidad", "respirar en el agua"];
//poderes.push(1); no sirve
poderes.push("volar");
poderes.push("invisibilidad");
poderes.push("respirar en el agua");


const TiposBasicos = () => {
  return (
    <>
      <h3>Tipos Basicos</h3>
      { nombre }, { edad }, { (activo) ? "activo" : "no activo" }
      <br />
      { poderes.join(', ') }
    </>
  )
}

export default TiposBasicos;