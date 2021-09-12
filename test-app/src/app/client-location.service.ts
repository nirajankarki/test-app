import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClientLocation} from './client-location';

@Injectable({
  providedIn: 'root'
})
export class ClientLocationService {

  constructor(private httpClient: HttpClient) { }
  getClientLocations(): Observable<ClientLocation[]>{
    return this.httpClient.get<ClientLocation[]>('http://localhost:3000/projects/clientlocations', {responseType: 'json'});
  }
}
