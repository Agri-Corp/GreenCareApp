import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Plant {
  id: number;
  plant: string;
  Difficult: string;
  value: number;
  image: string;
  timelife: string;
}

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getPlantDetails(id: string | null): Observable<Plant> {
    return this.http.get<Plant>(`${this.baseUrl}/plants/${id}`);
  }

  createLifecycle(lifecycle: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/lifecycle`, lifecycle);
  }
}
