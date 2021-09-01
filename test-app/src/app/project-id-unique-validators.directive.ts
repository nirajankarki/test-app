import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {ProjectService} from './project.service';
import {main} from '@angular/compiler-cli/src/main';
import {map} from 'rxjs/operators';
import {Project} from './project';

@Directive({
  selector: '[appProjectIdUniqueValidators]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: ProjectIdUniqueValidatorsDirective, multi: true}]
})
export class ProjectIdUniqueValidatorsDirective implements AsyncValidator{

  constructor(private projectService: ProjectService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.projectService.getProjectByProjectId(control.value)
      .pipe(map((existingProject: Project) => {
        if (existingProject != null){
          return {uniqueProjectId: {valid: false}};
        } else {
          return null;
        }
    }));
  }

}
