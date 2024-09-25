import {Component, OnInit} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-toolbar-content',
  standalone: true,
  imports: [
    MatToolbar
  ],
  templateUrl: './toolbar-content.component.html',
  styleUrl: './toolbar-content.component.css'
})
export class ToolbarContentComponent implements OnInit {
  currentSection: string = 'Home';
  currentIcon: string = 'home';
  constructor(private sectionService: CurrentSectionService) {}

  ngOnInit() {
    this.sectionService.currentSection$.subscribe(section => {
      this.currentSection = section;
      this.updateIcon(section);
    });
  }
  private updateIcon(section: string) {
    switch (section) {
      case 'Home':
        this.currentIcon = 'home';
        break;
      case 'Garden':
        this.currentIcon = 'park';
        break;
      case 'Life Cycle':
        this.currentIcon = 'cached';
        break;
      case 'Plans':
        this.currentIcon = 'layers';
        break;
      case 'Settings':
        this.currentIcon = 'settings';
        break;
      default:
        this.currentIcon = 'home';
    }
  }
}
