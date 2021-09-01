import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appAppClientLocationValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: AppClientLocationValidatorDirective, multi: true}]
})
export class AppClientLocationValidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    let isValid = true;
    if (control.value.projectName === 'Nepal'){
      isValid = false;
    }
    if (isValid === true){
      return {clientLocationStatus: { valid: false}};
    }
  }

}
