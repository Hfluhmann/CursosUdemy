import React from 'react'
// import TiposBasicos from "./typescript/TiposBasicos";
// import ObjetosLiterales from './typescript/ObjetosLiterales';
import { Funciones } from './typescript/Funciones';
const App = () => {
  return (
    <div className='mt-2'>
      <h1>
        Introduccion a TS - React
        <hr/>
          {/* <TiposBasicos /> */}
          {/* <ObjetosLiterales/> */}
          <Funciones/>
      </h1>
    </div>
  )
}

export default App;