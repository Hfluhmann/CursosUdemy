import { Usuarios } from './components/Usuarios';
// import { Login } from './components/Login';
// import TiposBasicos from "./typescript/TiposBasicos";
// import ObjetosLiterales from './typescript/ObjetosLiterales';
// import { Funciones } from './typescript/Funciones';
// import { Contador } from './components/Contador';
// import { ContadorConHook } from './components/ContadorConHook';
const App = () => {
return (
  <div className='mt-2'>
      <h1>
        Introduccion a TS - React
        <hr/>
          {/* <TiposBasicos /> */}
          {/* <ObjetosLiterales/> */}
          {/* <Funciones/> */}
          {/* <Contador /> */}
          {/* <ContadorConHook /> */}
          {/* <Login /> */}
          <Usuarios />
      </h1>
    </div>
  )
}

export default App;