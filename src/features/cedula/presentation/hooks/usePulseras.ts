import { useCallback, useEffect, useState } from 'react';
import { Pulsera } from '../../domain/cedula';
import { PulserasRepositoryImpl } from '../../data/PulserasRepositoryImpl';


const repository = new PulserasRepositoryImpl();

export const usePulseras = (cedula: string) => {

  const [pulseras, setPulseras] = useState<Pulsera[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [retryCount, setRetryCount] = useState(0);

  const consultarPulseras = useCallback(async () => {

    if (!cedula) {
      setPulseras([]);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const resultado = await repository.getPulseras(cedula);

      setPulseras(resultado);

    } catch (err) {

      setPulseras([]);

      setError(
        err instanceof Error
          ? err.message
          : 'Ocurrió un error al consultar las pulseras'
      );

    } finally {
      setLoading(false);
    }

  }, [cedula]);

  useEffect(() => {
    consultarPulseras();
  }, [consultarPulseras, retryCount]);

  const retry = () => {
    setRetryCount((prev) => prev + 1);
  };

  return {
    pulseras,
    loading,
    error,
    retry,
  };
};