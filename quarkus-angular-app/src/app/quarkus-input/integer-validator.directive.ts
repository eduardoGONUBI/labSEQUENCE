import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appIntegerValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: IntegerValidatorDirective, multi: true }]
})
export class IntegerValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value === null || control.value === undefined) {
      return null;  // Allow empty value for non-required field
    }

    const isInteger = Number.isInteger(control.value);
    return isInteger ? null : { integer: true };
  }
}
