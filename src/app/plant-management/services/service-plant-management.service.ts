import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServicePlantManagementService {

  Baseurl: string = 'https://my-json-server.typicode.com/Agri-Corp/dataAgriCore/main/db.json';

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
