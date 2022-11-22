import { AbstractControl, ValidatorFn } from '@angular/forms';

export class priceValidators {
  static isNumberCheck(): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
      let number = /^[.\d]+$/.test(c.value) ? +c.value : NaN;
      if (number !== number) {
        return { decimal: true };
      }

      return null;
    };
  }
}
