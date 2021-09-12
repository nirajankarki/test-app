import { Injectable } from '@angular/core';
import {CanDeactivate, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
export interface CanDeactivateComponent{
  canLeave: boolean;
}
@Injectable({
  providedIn: 'root'
})

export class CandeactiveGuardServiceService implements CanDeactivate<CanDeactivateComponent>{

  constructor() { }

  canDeactivate(component: CanDeactivateComponent): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.canLeave === true){
      return true;
    } else {
      return confirm('Do you want to leave ?');
    }
  }
}
