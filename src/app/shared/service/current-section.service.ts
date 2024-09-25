import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrentSectionService {

  private currentSectionSubject = new BehaviorSubject<string>('Home'); // Sección inicial
  currentSection$ = this.currentSectionSubject.asObservable();

  setCurrentSection(section: string) {
    this.currentSectionSubject.next(section);
  }

}
