import {Component, inject, OnInit} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatListItem, MatListModule, MatNavList} from "@angular/material/list";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {MatLine} from "@angular/material/core";
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule, MatIconButton} from "@angular/material/button";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, Observable, shareReplay} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {CurrentSectionService} from "../../../shared/service/current-section.service";
import {AccountManagementService, User} from "../../../account-management/service/account-management.service";

@Component({
  selector: 'app-sidenavbar-content',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterLink,
    MatLine,
  ],
  templateUrl: './sidenavbar-content.component.html',
  styleUrl: './sidenavbar-content.component.css'
})
export class SidenavbarContentComponent implements OnInit{
  userName: string = '';
  constructor(private sectionService: CurrentSectionService,private  authService: AccountManagementService) {}

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {
    this.updateUserDetails();
  }

  private updateUserDetails() {
    const currentUser: User | null = this.authService.getCurrentUser();
    if (currentUser) {
      this.userName = currentUser.name; // Toma el nombre del usuario actual
    }
  }
  updateSection(section: string) {
    this.sectionService.setCurrentSection(section);
  }

  logout() {
    this.authService.logout(); // Llama al método de cierre de sesión
    this.updateUserDetails(); // Actualiza los detalles del usuario
  }
}
