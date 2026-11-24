import { useState } from "react";
import { validarCedula } from "@/utils/validateCedula";

export const useCedula = () => {
  const [cedula, setCedula] = useState('');
  const [error, setError] = useState('');

  const onChangeCedula = (value: string) => {
    const cleanValue = value.replace(/\D/g, '').slice(0, 10);

    setCedula(cleanValue);

    if (cleanValue.length === 0) {
      setError('');
      return;
    }

    if (cleanValue.length < 10) {
      setError('');
      return;
    }

    setError(
      validarCedula(cleanValue) ? '' : 'La cédula ingresada no es válida'
    );
  };

  const isValid = cedula.length === 10 && validarCedula(cedula);

  const reset = () => {
    setCedula('');
    setError('');
  };

  return {
    cedula,
    error,
    isValid,
    onChangeCedula,
    reset,
  };
};