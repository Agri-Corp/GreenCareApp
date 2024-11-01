import {Component, OnInit} from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardContent, MatCardImage, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {SidenavbarContentComponent} from "../../../public/components/sidenavbar-content/sidenavbar-content.component";
import {ToolbarContentComponent} from "../../../public/components/toolbar-content/toolbar-content.component";
import {SearchBarContentComponent} from "../../../public/components/search-bar-content/search-bar-content.component";
import {ServicePlantManagementService} from "../../services/service-plant-management.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {CreatelifecycleComponent} from "../createlifecycle/createlifecycle.component";

@Component({
  selector: 'app-garden',
  standalone: true,
  imports: [
    SidenavbarContentComponent,
    ToolbarContentComponent,
    MatCard,
    MatCardContent,
    MatCardImage,
    NgForOf,
    SearchBarContentComponent,
    MatGridList,
    MatGridTile,
    MatButton,
    MatCardTitle
  ],
  templateUrl: './garden.component.html',
  styleUrl: './garden.component.css'
})
export class GardenComponent implements OnInit{
  gardenItems : any[] = [];


  constructor(private menuService: ServicePlantManagementService,private dialog: MatDialog, private router: Router) {}
  ngOnInit() {
    this.menuService.getgarden().subscribe((data: any[]) => {
      this.gardenItems = data;
    });
  }
  openCreateLifeCycleDialog(garden: any) {
    const dialogRef = this.dialog.open(CreatelifecycleComponent, {
      data: { plant: garden.plant, image: garden.image }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.menuService.createLifeCycle(result).subscribe(
          response => {
            console.log('Ciclo de vida creado:', response);
            // Redirigir a la pantalla de ciclos de vida
            this.router.navigate(['/lifecycle']);
          },
          error => {
            console.error('Error al crear ciclo de vida:', error);
          }
        );
      }
    });
  }
}
