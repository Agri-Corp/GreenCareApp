import {Component, inject} from '@angular/core';
import {MatSidenav, MatSidenavContainer} from "@angular/material/sidenav";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {MatLine} from "@angular/material/core";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, Observable, shareReplay} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-sidenavbar-content',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatSidenav,
    MatNavList,
    MatListItem,
    MatIcon,
    RouterLink,
    MatLine,
    MatToolbar,
    MatIconButton,
    AsyncPipe
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
