interface Persona {
nombreCompleto: string;
edad: number;
direccion: Direccion; //Los objetos anidados no suelen ir definidos en una sola interfaz
}

interface Direccion {
  pais: string;
  dpto:number;
}



const ObjetosLiterales = () => {

  const persona: Persona = {
    nombreCompleto: "Hans",
    edad: 23,
    direccion: {
      pais: "Chile",
      dpto: 507,
    },
  }
  
  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>
          {JSON.stringify(persona, null, 2)}
        </pre>
      </code>
    </>
  )
}

export default ObjetosLiterales;