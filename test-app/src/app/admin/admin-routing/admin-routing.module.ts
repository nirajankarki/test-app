import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {AboutComponent} from '../about/about.component';
import {SignupComponent} from '../signup/signup.component';
import {ProjectsComponent} from '../projects/projects.component';
import {ProjectDetailsComponent} from '../project-details/project-details.component';
import {CandeactiveGuardServiceService} from '../../candeactive-guard-service.service';

const routes: Routes = [
  {path: '', redirectTo: 'admin/dashboard', pathMatch: 'full'},
  {
    path: 'admin', children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'about', component: AboutComponent},
      {path: 'signup', component: SignupComponent, canDeactivate: [CandeactiveGuardServiceService]},
      {path: 'projects', component: ProjectsComponent},
      {path: 'projects/view/:projectId', component: ProjectDetailsComponent},
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
