import {Component, OnInit} from '@angular/core';
import {MatGridListModule} from "@angular/material/grid-list";
import { MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatProgressBar} from "@angular/material/progress-bar";
import {AsyncPipe, NgForOf} from "@angular/common";
import {ToolbarContentComponent} from "../../../public/components/toolbar-content/toolbar-content.component";
import {SidenavbarContentComponent} from "../../../public/components/sidenavbar-content/sidenavbar-content.component";
import {ServicePlantManagementService} from "../../services/service-plant-management.service";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ToolbarContentComponent,
    SidenavbarContentComponent,
    NgForOf,
    MatProgressBar,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  taskItems : any[] = [];
  gardenItems : any[] = [];
  lifecycleitems : any[] = [];

  constructor(private menuService: ServicePlantManagementService) {}
  ngOnInit() {
    this.menuService.getActivities().subscribe((data: any[]) => {
      this.taskItems = data;
    });
    this.menuService.getlifecycle().subscribe((data: any[]) => {
      this.lifecycleitems = data;
    });
    this.menuService.getgarden().subscribe((data: any[]) => {
      this.gardenItems = data;
    });
  }
}
