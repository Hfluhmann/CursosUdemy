import { useState } from "react";
import { Formularios } from '../components/Formularios';

export const useForm = <T extends Object> (formulario: T) => {

  const [state, setState] = useState( formulario );

  const onChange = (value: string, campo: keyof T ) => {
    setState({
      ...state,
      [campo]: value,
    });
  }
  return{
    ...state,
    formulario: state,
    onChange,
  }
}
