import {Component, OnInit} from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatProgressBar} from "@angular/material/progress-bar";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    MatIcon,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatProgressBar,
    NgForOf
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
