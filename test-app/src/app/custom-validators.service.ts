import { Injectable } from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {Observable} from 'rxjs';
import {ProjectService} from './project.service';
import {map} from 'rxjs/operators';

@Injectable()
export class CustomValidatorsService {

  constructor(private projectServiceEmail: ProjectService) { }
  public minimumAgeValidator(minAge: number): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value){
        return null;
        const today = new Date();
        const dateOfBirth = new Date(control.value);
        const diffMilliSeconds = Math.abs(today.getTime() - dateOfBirth.getTime());
        const diffYears = (diffMilliSeconds / (1000 * 60 * 60 * 24)) / 365.25;
        if (diffYears >= minAge){
          return null;
        } else {
          return {minAge: {valid: false}};
        }
      }
    };
  }
  public compareValidator(controlToValidate: string, controlToCompare: string): ValidatorFn{
    return (formGroup: FormGroup): ValidationErrors | null => {
      if (!(formGroup.get(controlToValidate) as FormControl).value){
        return null;
      }
      if ((formGroup.get(controlToValidate) as FormControl).value === (formGroup.get(controlToCompare) as any).value) {
        return null;
      } else {
        (formGroup.get(controlToValidate)as FormControl).setErrors({ compareValidator: {valid: false}});
        return { compareValidator: {valid: false}};
      }
    };
  }
  public DuplicateEmailValidator(): AsyncValidatorFn{
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.projectServiceEmail.getUserByEmail(control.value).pipe(map((existingUser: any) => {
        if (existingUser != null){
          control.setErrors({uniqueEmail: {valid: false}});
          return {uniqueEmail: {valid: false}};
        } else {
          return null;
        }
      }));
    };
  }
}
