export function validarCedula(cedula: string): boolean {
  if (!/^\d{10}$/.test(cedula)) return false;

  const provincia = Number(cedula.substring(0, 2));
  const tercerDigito = Number(cedula[2]);

  if (!((provincia >= 1 && provincia <= 24) || provincia === 30)) {
    return false;
  }

  if (tercerDigito >= 6) return false;

  const coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];

  let suma = 0;

  for (let i = 0; i < 9; i++) {
    let resultado = Number(cedula[i]) * coeficientes[i];

    if (resultado > 9) resultado -= 9;

    suma += resultado;
  }

  const verificador = (10 - (suma % 10)) % 10;

  return verificador === Number(cedula[9]);
}