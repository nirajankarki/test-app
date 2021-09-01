import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AboutComponent} from './about/about.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {DashboardService} from '../dashboard.service';
import {ProjectsComponent} from './projects/projects.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SignupComponent} from './signup/signup.component';
import {TeamsizevalidatorDirective} from '../teamsizevalidator.directive';
import {AppClientLocationValidatorDirective} from '../app-client-location-validator.directive';
import {ProjectIdUniqueValidatorsDirective} from '../project-id-unique-validators.directive';
import {CustomValidatorsService} from '../custom-validators.service';


@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent,
    ProjectsComponent,
    SignupComponent,
    TeamsizevalidatorDirective,
    AppClientLocationValidatorDirective,
    ProjectIdUniqueValidatorsDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [DashboardComponent,
    AboutComponent,
    MyProfileComponent,
    ProjectsComponent,
    SignupComponent,
    TeamsizevalidatorDirective,
    AppClientLocationValidatorDirective,
    ProjectIdUniqueValidatorsDirective],
  providers: [DashboardService,
    CustomValidatorsService
  ]
})
export class AdminModule {
}
