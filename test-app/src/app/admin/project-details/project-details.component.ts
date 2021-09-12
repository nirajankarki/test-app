import {Component, OnDestroy, OnInit} from '@angular/core';
import {Project} from '../../project';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../project.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  project: Project;
  routerParamSubscribe: Subscription;

  constructor(private activateRoute: ActivatedRoute, private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.routerParamSubscribe = this.activateRoute.params.subscribe((params) => {
      const pid = params.projectId;
      this.projectService.getProjectByProjectId(pid).subscribe((response) => {
        this.project = response;
      });
    });
  }

  ngOnDestroy(): void {
    this.routerParamSubscribe.unsubscribe();
  }

}
