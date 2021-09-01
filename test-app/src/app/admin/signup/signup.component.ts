import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CountriesService} from '../../countries.service';
import {Country} from '../../country';
import {CustomValidatorsService} from '../../custom-validators.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  genders = ['male', 'female'];
  countries: Country[] = [];
  constructor(private countryService: CountriesService, private formBuilder: FormBuilder,
              private customValidators: CustomValidatorsService) { }

  ngOnInit(): void {
    this.countries = this.countryService.getCountries();
    // this.signUpForm = new FormGroup({
    //   personalName: new FormGroup({
    //     firstName: new FormControl(null),
    //     lastName: new FormControl(null)
    //   }),
    //   email: new FormControl(null),
    //   mobile: new FormControl(null),
    //   dateOfBirth: new FormControl(null),
    //   gender: new FormControl(null),
    //   countryId: new FormControl(null),
    //   reciveNewsLetter: new FormControl(null),
    //   skills: new FormArray([])
    // });
    // this.signUpForm.valueChanges.subscribe((value => {
    //   // console.log(value.firstName);
    // }));
    this.signUpForm = this.formBuilder.group({
      personalName: this.formBuilder.group({
        firstName: [null, [Validators.required, Validators.minLength(2)]],
        lastName: [null, [Validators.required, Validators.minLength(2)]]
      }),
      email: [null, [Validators.required, Validators.email]],
      mobile: [null, [Validators.required, Validators.pattern(/^[977]\d{9}$/)]],
      dateOfBirth: [null, [Validators.required, this.customValidators.minimumAgeValidator(19)]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      countryId: [null, [Validators.required]],
      reciveNewsLetter: [null],
      skills: this.formBuilder.array([])
    }, {
      validators: [
        this.customValidators.compareValidator('confirmPassword', 'password')
      ]
    });
    this.signUpForm.valueChanges.subscribe((value => {
       console.log(value.dateOfBirth);
    }));
  }
  onSubmitAccount(): any{
    // console.log(this.signUpForm.value);
    // this.signUpForm.setValue({
    //   firstName: 'Nirajan',
    //   lastName: 'Karki',
    //   email: 'nirajan@gmail.com',
    //   mobile: '9843002u4',
    //   dateOfBirth: '2034-03-04',
    //   gender: 'male',
    //   countryId: '2',
    //   reciveNewsLetter: 'true'
    // });
    // this.signUpForm.patchValue({
    //   firstName: 'Nirajan',
    //     lastName: 'Karki',
    //     email: 'nirajan@gmail.com',
    //     mobile: '9843002u4'
    // });
    // this.signUpForm.reset();
    // this.signUpForm.reset({
    //       firstName: 'Nirajan',
    //       lastName: 'Karki',
    //       email: 'nirajan@gmail.com',
    //       mobile: '9843002u4'
    // });
  }
  onAddSkills(): any{
    const formGroup = new FormGroup({
      skillName: new FormControl(null, [Validators.required]),
      level: new FormControl(null, [Validators.required])
    });
    (this.signUpForm.get('skills') as FormArray).push(formGroup);
    console.log(formGroup);
  }
  onRemoveSkills(num: number): void{
    (this.signUpForm.get('skills') as FormArray).removeAt(num);
  }
  getControls(): any {
    return (this.signUpForm.get('skills') as FormArray).controls;
  }
}
