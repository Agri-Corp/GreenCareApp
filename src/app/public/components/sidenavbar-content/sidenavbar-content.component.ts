import {Component, inject} from '@angular/core';
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
export class SidenavbarContentComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private sectionService: CurrentSectionService) {}

  updateSection(section: string) {
    this.sectionService.setCurrentSection(section);
  }
}
