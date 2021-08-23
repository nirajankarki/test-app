import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation = '';
  Username = '';
  NoOfTeamMembers = 0;
  TotalCostOfAllProjects = 0;
  PendingTasks = 0;
  UpComingProjects = 0;
  ProjectCost = 0;
  CurrentExpendutrue = 0;
  AvialbleFunds = 0;
  ToDay: Date;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];

  constructor(private service: DashboardService) {}


  ngOnInit(): void {
    this.Designation = 'Team leader';
    this.Username = 'John Smint';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 0.2;
    this.ProjectCost = 2;
    this.CurrentExpendutrue = 1234564;
    this.AvialbleFunds = 4345343;
    this.Clients = ['ABC Infotect Ltd.', 'DEF Software Solution', 'GHI industries'];
    this.Projects = ['ProjectA', 'ProjectB', 'ProectC', 'ProjectD'];
    this.ToDay = new Date();

    for (let i = 2019; i >= 2011; i--){
      this.Years.push(i);
    }
    this.TeamMembersSummary = this.service.getTableLevelSummary();
    this.TeamMembers = [
      {
        Region: 'East', Members: [
          {ID: 1, Name: 'Ford', Status: 'Available'},
          {ID: 2, Name: 'Miller', Status: 'Available'},
          {ID: 3, Name: 'Jones', Status: 'Busy'},
          {ID: 4, Name: 'James', Status: 'Busy'}
        ]
      },
      {
        Region: 'West', Members: [
          {ID: 1, Name: 'Nirajan', Status: 'Available'},
          {ID: 2, Name: 'Miller', Status: 'Available'},
          {ID: 3, Name: 'Jones', Status: 'Busy'},
          {ID: 4, Name: 'James', Status: 'Busy'}
        ]
      },
      {
        Region: 'North', Members: [
          {ID: 1, Name: 'Hari', Status: 'Available'},
          {ID: 2, Name: 'Miller', Status: 'Available'},
          {ID: 3, Name: 'Jones', Status: 'Busy'},
          {ID: 4, Name: 'James', Status: 'Busy'}
        ]
      },
      {
        Region: 'South', Members: [
          {ID: 1, Name: 'Ford', Status: 'Available'},
          {ID: 2, Name: 'Miller', Status: 'Available'},
          {ID: 3, Name: 'Jones', Status: 'Busy'},
          {ID: 4, Name: 'James', Status: 'Busy'}
        ]
      }
    ];
  }
   onProjectChange($event): any{
    if ($event.target.innerHTML === 'ProjectA'){
      this.ProjectCost = 2890807;
      this.CurrentExpendutrue = 232423;
      this.AvialbleFunds = 4345343;
    } else if ($event.target.innerHTML === 'ProjectB') {
      this.ProjectCost = 123432;
      this.CurrentExpendutrue = 20030;
      this.AvialbleFunds = 403230;
    }else if ($event.target.innerHTML === 'ProjectC') {
      this.ProjectCost = 230002;
      this.CurrentExpendutrue = 12423;
      this.AvialbleFunds = 223232;
    }else if ($event.target.innerHTML === 'ProjectD') {
      this.ProjectCost = 40033;
      this.CurrentExpendutrue = 20030;
      this.AvialbleFunds = 403230;
    }
   }


}
