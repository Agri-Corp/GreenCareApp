import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, forkJoin, map, Observable, throwError} from "rxjs";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccountManagementService {
  private userId: string | null = null;
  private currentUser: User | null = null;
  Baseurl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  register(userData: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.Baseurl}/users`, userData);
  }

  login(credentials: { email: string; password: string }): Observable<User> {
    return this.http
      .get<User[]>(`${this.Baseurl}/users`, {
        params: {
          email: credentials.email,
          password: credentials.password,
        },
      })
      .pipe(
        map((users) => {
          if (users.length > 0) {
            // Almacena el usuario actual
            this.currentUser = users[0]; // Asegúrate de que este sea el usuario correcto
            this.userId = users[0].id; // Guarda el ID del usuario
            return this.currentUser;
          } else {
            throw new Error('Invalid email or password');
          }
        }),
        catchError((error) => {
          return throwError(error.message || 'Error in authentication');
        })
      );
  }

  logout() {
    this.currentUser = null; // Limpia el usuario actual al cerrar sesión
    this.userId = null;
  }

  getCurrentUser(): User | null {
    return this.currentUser; // Devuelve el usuario actual
  }

  getCurrentUserId(): string {
    return this.userId || ''; // Devuelve el ID del usuario actual
  }
}
