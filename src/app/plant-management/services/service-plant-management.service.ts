import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {AccountManagementService} from "../../account-management/service/account-management.service";

@Injectable({
  providedIn: 'root'
})
export class ServicePlantManagementService {

  Baseurl: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private authService: AccountManagementService) {}


  getActivities(): Observable<any> {
    const userId = this.authService.getCurrentUserId(); // Obtener ID del usuario actual
    return this.http.get<any[]>(`${this.Baseurl}/Activities`).pipe(
      map((activities) => activities.filter(activity => activity.userId === userId))
    );
  }


  getgarden(): Observable<any> {
    return this.http.get<any>(`${this.Baseurl}/Garden`);
  }


  getlifecycle(): Observable<any> {
    const userId = this.authService.getCurrentUserId(); // Obtener ID del usuario actual
    return this.http.get<any[]>(`${this.Baseurl}/LifeCycle`).pipe(
      map((lifeCycles) => lifeCycles.filter(lifeCycle => lifeCycle.userId === userId))
    );
  }
}
