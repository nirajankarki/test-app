import {Component, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {ProjectService} from '../../project.service';
import {Project} from '../../project';
import {ClientLocation} from '../../client-location';
import {ClientLocationService} from '../../client-location.service';
import {NgForm} from '@angular/forms';
import * as $ from 'jquery';
import {FilterPipe} from '../filter.pipe';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  isProjectLoading: boolean;
  clientLocation: ClientLocation[] = [];
  projects: Project[] = [];
  pro: Project[] = [];
  newProject: Project = new Project();
  editProject: Project = new Project();
  editIndex: number = null;
  deleteProject: Project = new Project();
  deleteIndex: number = null;
  searchBy = 'projectName';
  searchText = '';
  currentPageIndex = 0;
  pages: any[] = [];
  pageSize = 3;
  @ViewChild('newForm') newForm: NgForm;
  @ViewChild('editForm') editForm: NgForm;
  isAllChecked: boolean;
  // @ViewChild('toggleButton') toggleButton;
  // @ViewChildren('toggleButton') toggleButton;
  @ViewChildren('toggleButton') toggleButton;
  @ViewChildren('prjFocus') prjFocus: ElementRef;

  constructor(private projectService: ProjectService, private clientLocationService: ClientLocationService) {
  }

  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(
      (response: Project[]) => {
        this.pro = response;
        console.log(this.pro);
        this.calculateNoOfPages();
      }
    );
    // this.calculateNoOfPages();
    /*this.clientLocationService.getClientLocations().subscribe(
      (response) => {
        this.clientLocation = response;
        this.isProjectLoading = false;
      }
    );*/
  }

  onSaveClick(): void {
    if (this.newForm.valid) {
      this.newProject.clientLocationId = 0;
      this.projectService.insertProject(this.newProject).subscribe((response) => {
          // Add project to the grid
          const p: Project = new Project();
          p.projectId = response.projectId;
          p.projectName = response.projectName;
          p.dateOfStart = response.dateOfStart;
          p.teamSize = response.teamSize;
          p.clientLocation = response.clientLocation;
          p.active = response.active;
          p.clientLocationId = response.clientLocationId;
          p.status = response.status;
          this.projects.push(p);
          // clear form
          this.newProject.projectId = null;
          this.newProject.projectName = null;
          this.newProject.dateOfStart = null;
          this.newProject.teamSize = null;
          this.newProject.active = null;
          this.newProject.clientLocationId = null;
          this.newProject.status = null;
          $('#newFormCancel').trigger('click');
          this.calculateNoOfPages();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  onNewClick(event): any {
    this.newForm.reset();
    setTimeout(() => {
      this.prjFocus.nativeElement.focus();
    }, 100);
  }

  onEditClick(event, index: number): void {
    this.editForm.resetForm();
    setTimeout(() => {
      this.editProject.projectId = this.projects[index].projectId;
      this.editProject.projectName = this.projects[index].projectName;
      this.editProject.dateOfStart = this.projects[index].dateOfStart.split('/').reverse().join('-');
      this.editProject.teamSize = this.projects[index].teamSize;
      this.editProject.active = this.projects[index].active;
      this.editProject.status = this.projects[index].status;
      this.editProject.clientLocation = this.projects[index].clientLocation;
      this.editProject.clientLocationId = this.projects[index].clientLocationId;
      this.editIndex = index;
    }, 100);

  }

  onUpdateClick(): void {
    if (this.editForm.valid) {
      this.projectService.updateProject(this.editProject).subscribe((response) => {
        const p: Project = new Project();
        p.projectId = response.projectId;
        p.projectName = response.projectName;
        p.dateOfStart = response.dateOfStart;
        p.teamSize = response.teamSize;
        p.active = response.active;
        p.clientLocationId = response.clientLocationId;
        p.clientLocation = response.clientLocation;
        p.status = response.status;
        this.projects[this.editIndex] = p;

        this.newProject.projectId = null;
        this.newProject.projectName = null;
        this.newProject.dateOfStart = null;
        this.newProject.teamSize = null;
        this.newProject.status = null;
        this.newProject.clientLocationId = null;
        this.newProject.clientLocation = null;
        this.newProject.active = true;
        $('#editFormCancel').trigger('click');
      }, (error) => {
        console.log(error);
      });
    }
  }

  onDeleteClick(event, index: number): void {
    this.deleteIndex = index;
    this.deleteProject.projectId = this.projects[index].projectId;
    this.deleteProject.projectName = this.projects[index].projectName;
    this.deleteProject.dateOfStart = this.projects[index].dateOfStart;
    this.deleteProject.teamSize = this.projects[index].teamSize;
    this.calculateNoOfPages();
  }

  onDeleteConfirmClick(): void {
    this.projectService.deleteProject(this.deleteProject.projectId).subscribe((response) => {
      this.projects.splice(this.deleteIndex, 1);
      this.deleteProject.projectId = null;
      this.deleteProject.projectName = null;
      this.deleteProject.dateOfStart = null;
      this.deleteProject.teamSize = null;
    }, (error) => {
      console.log(error);
    });
  }

  onSearchClick(): void {
    /*this.projectService.searchProjects(this.searchBy, this.searchText).subscribe(
      (response) => {
        this.projects = response;
      }, (error) => {
        console.log(error);
      });*/
  }

  onHideShow(event): any {
    /*const togLen = this.toggleButton.toArray();
    for (let i = 0; i < togLen.length; i++) {
      togLen[i].showHide();
    }*/
    // this.toggleButton.showHide();
    this.projectService.showHide();
  }

  isAllChangeClick(event): any {
    const passSelection = this.toggleButton.toArray();
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < passSelection.length; i++) {
      passSelection[i].onSelectAll(this.isAllChecked);
    }
  }

  calculateNoOfPages(): void {
    const filterPipe = new FilterPipe();
    // tslint:disable-next-line:prefer-const
    const resultProjects = filterPipe.transform(this.pro, this.searchBy, this.searchText);
    // tslint:disable-next-line:prefer-const
    const noOfPages = Math.ceil(resultProjects.length / this.pageSize);

    this.pages = []; // clear page
    for (let i = 0; i < noOfPages; i++) {
      this.pages.push({pIndex: i});
    }
    this.currentPageIndex = 0;
  }

  onSearchTextKeyUp(event): void {
    this.calculateNoOfPages();
  }

  onPageIndexClick(pageIndex: number): void {
    this.currentPageIndex = pageIndex;
  }
}
