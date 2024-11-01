import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, switchMap} from "rxjs";
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
@Injectable({
  providedIn: 'root'
})
export class ServicePlantManagementService {

  Baseurl: string = 'https://my-json-server.typicode.com/Agri-Corp/dataAgriCore/main/db.json';

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

  createLifeCycle(data: any): Observable<any> {
    const userId = this.authService.getCurrentUserId(); // Obtener ID del usuario actual

    return this.getlifecycle().pipe(
      map((lifeCycles: LifeCycle[]) => {
        // Generar nuevo id ascendente
        const newId = lifeCycles.length > 0 ? Math.max(...lifeCycles.map(cycle => parseInt(cycle.id))) + 1 : 1;
        // Crear el nuevo objeto con todos los datos necesarios
        const newLifeCycle: LifeCycle = {
          id: newId.toString(),
          userId: userId,
          name_plant: data.name_plant,
          plant: data.plant,
          image: data.image,
          status: 'Excellent',
          time: `${data.time} hours`,
          about: data.about,
          value: 0 // Valor inicial del progreso
        };
        return newLifeCycle;
      }),
      switchMap(newLifeCycle => {
        // Guardar el ciclo de vida en el backend
        return this.http.post<any>(`${this.Baseurl}/LifeCycle`, newLifeCycle);
      })
    );
  }

}
