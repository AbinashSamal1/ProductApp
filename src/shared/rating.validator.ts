import { AbstractControl } from '@angular/forms';

export function ratingValidator(
  control: AbstractControl
): { [key: string]: boolean } | null {
  if (
    control.value !== undefined &&
    (isNaN(control.value) || control.value < 1 || control.value > 5)
  ) {
    return { ratingRange: true};
  }
  return null;
}
