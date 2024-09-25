import {Component, OnInit} from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardContent, MatCardImage} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-garden',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    MatCard,
    MatCardContent,
    MatCardImage,
    MatButton,
    NgForOf
  ],
  templateUrl: './garden.component.html',
  styleUrl: './garden.component.css'
})
export class GardenComponent implements OnInit{
  gardenItems : any[] = [];


  constructor(private menuService: ServicePlantManagementService) {}
  ngOnInit() {
    this.menuService.getgarden().subscribe((data: any[]) => {
      this.gardenItems = data;
    });
  }
}
