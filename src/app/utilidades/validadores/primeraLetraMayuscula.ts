import { AbstractControl, ValidatorFn } from '@angular/forms';

export function primeraLetraMayuscula(): ValidatorFn {
  return (control: AbstractControl) : any => {
    const valor = <string>control.value;    //sacar el valor del control - array
    if (!valor){
      return;
    };    //si no hay un valor
    if (valor.length === 0){
      return;
    }

    const primeraLetra = valor[0];
    if (primeraLetra !== primeraLetra.toUpperCase()) {
      return {
        primeraLetraMayuscula: {   // ! nombre del error
          mensaje: 'La primera letra debe ser mayuscula',
        },
      };
    }
    return;
  }
}
