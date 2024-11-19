import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, map, Observable, of, switchMap} from "rxjs";
import {AccountManagementService} from "../../account-management/service/account-management.service";
interface LifeCycle {
  id: string;        // ID del ciclo de vida
  userId: string;    // ID del usuario
  name_plant: string; // Nombre de la planta
  plant: string;     // Información de la planta
  image: string;     // URL de la imagen
  status: string;    // Estado
  time: string;      // Tiempo de cuidado
  about: string;     // Descripción
  value: number;     // Progreso
}
export interface Task {
  title: string;
  completed: boolean;
  lifeCycleId: string;
}
@Injectable({
  providedIn: 'root'
})
export class ServicePlantManagementService {

  Baseurl: string = 'https://my-json-server.typicode.com/Agri-Corp/dataAgriCore/main/db.json';

  constructor(private http: HttpClient, private authService: AccountManagementService) {}



  getActivities(lifeCycleId: string): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.Baseurl}/Activities?lifeCycleId=${lifeCycleId}`);
  }


  getgarden(): Observable<any> {
    return this.http.get<any>(`${this.Baseurl}/Garden`);
  }


  getlifecycle(): Observable<any> {
    const userId = this.authService.getCurrentUserId(); // Get the current user's ID
    return this.http.get<any[]>(`${this.Baseurl}/LifeCycle`).pipe(
      map((lifeCycles) => lifeCycles.filter(lifeCycle => lifeCycle.userId === userId))
    );
  }

  createLifeCycle(data: any): Observable<any> {
    const userId = this.authService.getCurrentUserId(); // Get the current user's ID

    return this.getUserPlan(userId).pipe(
      switchMap(userPlan => {
        return this.http.get<any[]>(`${this.Baseurl}/LifeCycle`).pipe(
          switchMap((lifeCycles: LifeCycle[]) => {
            if (userPlan !== 'premium' && lifeCycles.filter(lifeCycle => lifeCycle.userId === userId).length >= 5) {
              return of({ error: 'Freemium plan allows only 5 life cycles' });
            }

            // Generate new id based on the maximum existing id
            const newId = lifeCycles.length > 0 ? Math.max(...lifeCycles.map(cycle => parseInt(cycle.id))) + 1 : 1;
            // Create the new object with all necessary data
            const newLifeCycle: LifeCycle = {
              id: newId.toString(),
              userId: userId,
              name_plant: data.name_plant,
              plant: data.plant,
              image: data.image,
              status: 'Excellent',
              time: `${data.time} hours`,
              about: data.about,
              value: 0 // Initial progress value
            };

            // Save the life cycle in the backend
            return this.http.post<any>(`${this.Baseurl}/LifeCycle`, newLifeCycle);
          })
        );
      })
    );
  }

  getUserPlan(userId: string): Observable<string> {
    return this.http.get<any>(`${this.Baseurl}/users/${userId}`).pipe(
      map(user => user.userPlan) // Ensure it returns userPlan
    );
  }

  updatePasswordForAll(oldPassword: string, newPassword: string): Observable<any> {
    return this.http.get<any[]>(`${this.Baseurl}/users`).pipe(
      switchMap(users => {
        const updateRequests = users.map(user => {
          if (user.password === oldPassword) {
            user.password = newPassword;
            return this.http.put(`${this.Baseurl}/users/${user.id}`, user);
          }
          return of(null);
        });
        return forkJoin(updateRequests);
      })
    );
  }
  updateUserPlan(userId: string, newPlan: string): Observable<any> {
    const url = `${this.Baseurl}/users/${userId}`;
    return this.http.patch(url, { userPlan: newPlan });
  }

  deleteLifeCycle( lifecycleId: string): Observable<void> {
    return this.http.delete<void>(`${this.Baseurl}/LifeCycle/${lifecycleId}`);
  }

}
