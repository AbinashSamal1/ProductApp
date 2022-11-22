import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
  if (!control.value.startsWith('https') || !control.value.includes('.in')|| !control.value.includes('.jpg')) {
    return { invalidUrl: true };
  }
  return null;
}
