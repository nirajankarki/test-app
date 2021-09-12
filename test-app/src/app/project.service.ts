import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  hideShowTable = false;
  constructor(private httpClient: HttpClient) { }
  showHide(): void{
    this.hideShowTable = !this.hideShowTable;
  }
  getAllProjects(): Observable<Project[]>{
    return this.httpClient.get<Project[]>('http://localhost:3000/projects', {responseType: 'json'});
  }
  getProjectByProjectId(ProjectID: number): Observable<Project>{
    return this.httpClient.get<Project>('http://localhost:3000/projects/' + ProjectID, {responseType: 'json'});
  }
  insertProject(newProject: Project): Observable<Project>{
    return this.httpClient.post<Project>('http://localhost:3000/projects', newProject, {responseType: 'json'});
  }
  updateProject(updateProject: Project): Observable<Project>{
    return this.httpClient.put<Project>('http://localhost:3000/projects/' + updateProject.projectId, updateProject, {responseType: 'json'});
  }
  deleteProject(projectId: number): Observable<string>{
    return this.httpClient.delete<string>('http://localhost:3000/projects/' + projectId, {responseType: 'json'});
  }
  searchProjects(searchBy: string, searchText: string): Observable<Project[]>{
    return this.httpClient.get<Project[]>('http://localhost:3000/projects/search' + searchBy + '/' + searchText, {responseType: 'json'});
  }


  getUserByEmail(Email: string): Observable<any>{
    return this.httpClient.get<any>('http://localhost:3000/projects/getUserByEmail/' + Email, {responseType: 'json'});
  }


}
