import { Injectable } from '@angular/core';
import {Country} from './country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() { }
  getCountries(): Country[]{
    return [new Country(1, 'Nepal'),
            new Country(2, 'China'),
            new Country(3, 'India'),
            new Country(4, 'USA'),
            new Country(5, 'AUS')
    ];
  }
}
