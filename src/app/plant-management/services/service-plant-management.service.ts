import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicePlantManagementService {

  Baseurl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getActivities() : Observable<any> {
    return this.http.get<any>(`${this.Baseurl}/Activities`);
  }
  getgarden() : Observable<any> {
    return this.http.get<any>(`${this.Baseurl}/Garden`);
  }
  getlifecycle(): Observable<any>  {
    return this.http.get<any>(`${this.Baseurl}/LifeCycle`);
  }
}
