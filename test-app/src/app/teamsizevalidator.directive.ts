import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appTeamsizevalidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: TeamsizevalidatorDirective, multi: true}]
})
export class TeamsizevalidatorDirective implements Validator{

  constructor() { }
  @Input('appTeamsizevalidator') num: number;
  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value % 5 === 0){
      return null;
    } else {
      return {divisible : {valid: false}};
    }
  }

}
