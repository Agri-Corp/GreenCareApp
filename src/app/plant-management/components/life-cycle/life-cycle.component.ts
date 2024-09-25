import {Component, OnInit} from '@angular/core';
import {SidenavbarContentComponent} from "../../../public/components/sidenavbar-content/sidenavbar-content.component";
import {ToolbarContentComponent} from "../../../public/components/toolbar-content/toolbar-content.component";
import {SearchBarContentComponent} from "../../../public/components/search-bar-content/search-bar-content.component";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardContent, MatCardImage, MatCardTitle} from "@angular/material/card";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatButton} from "@angular/material/button";
import {ServicePlantManagementService} from "../../services/service-plant-management.service";
import {NgForOf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [
    SidenavbarContentComponent,
    ToolbarContentComponent,
    SearchBarContentComponent,
    MatGridList,
    MatGridTile,
    MatCard,
    MatCardTitle,
    MatCardImage,
    MatCardContent,
    MatProgressBar,
    MatButton,
    NgForOf,
    MatIcon
  ],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit{
  lifecycleItems : any[] = [];


  constructor(private menuService: ServicePlantManagementService) {}
  ngOnInit() {
    this.menuService.getlifecycle().subscribe((data: any[]) => {
      this.lifecycleItems = data;
    });
  }
}
