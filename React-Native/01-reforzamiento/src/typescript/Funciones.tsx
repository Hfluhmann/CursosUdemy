export const Funciones = () => {
  
  const sumar = (a:number, b:number):number => {
    return a + b;
  }
  
  return (
    <>
      <h3>Funciones</h3>
      <span>La suma es: {sumar(10, 15)} </span>
    </>
  )
}
