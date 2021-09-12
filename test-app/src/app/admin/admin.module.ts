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
import { ProjectComponent } from './project/project.component';
import { CheckboxprinterComponent } from './checkboxprinter/checkboxprinter.component';
import { NumberToWordPipe } from './number-to-word.pipe';
import { FilterPipe } from './filter.pipe';
import { PagingPipe } from './paging.pipe';
import {RouterModule} from '@angular/router';
import {ProjectDetailsComponent} from './project-details/project-details.component';
import {AdminRoutingModule} from './admin-routing/admin-routing.module';


@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent,
    ProjectsComponent,
    SignupComponent,
    TeamsizevalidatorDirective,
    AppClientLocationValidatorDirective,
    ProjectIdUniqueValidatorsDirective,
    ProjectComponent,
    CheckboxprinterComponent,
    NumberToWordPipe,
    FilterPipe,
    PagingPipe,
    ProjectDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  exports: [DashboardComponent,
    AboutComponent,
    MyProfileComponent,
    ProjectsComponent,
    SignupComponent,
    TeamsizevalidatorDirective,
    AppClientLocationValidatorDirective,
    ProjectIdUniqueValidatorsDirective,
    ProjectComponent,
    CheckboxprinterComponent,
    ProjectDetailsComponent
  ],
  providers: [DashboardService,
    CustomValidatorsService
  ]
})
export class AdminModule {
}
