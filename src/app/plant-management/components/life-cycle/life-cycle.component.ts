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
import {MatDialog} from "@angular/material/dialog";
import {LifecycledetailsComponent} from "../lifecycledetails/lifecycledetails.component";



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
  lifeCycles: any[] = [];  // Array para almacenar los ciclos de vida
  loading: boolean = true;  // Indicador de carga
  error: string | null = null;// Mensaje de error


  constructor(private plantService: ServicePlantManagementService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadLifeCycles();
  }

  loadLifeCycles(): void {
    this.plantService.getlifecycle().subscribe({
      next: (data) => {
        this.lifeCycles = data;  // Asignar los datos recibidos al array
        this.loading = false;     // Cambiar el estado de carga
      },
      error: (err) => {
        console.error('Error fetching life cycles:', err);
        this.error = 'Error loading life cycles';  // Mostrar un mensaje de error
        this.loading = false;  // Cambiar el estado de carga
      }
    });
  }
  openTaskDialog(lifecycle: any): void {
    const tasks = [
      { title: 'Regar la planta', completed: false },
      { title: 'Fertilizar', completed: false },
      { title: 'Podar', completed: false },
    ];

    const dialogRef = this.dialog.open(LifecycledetailsComponent, {
      width: '400px',
      data: { tasks },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Manejar el resultado si es necesario
      }
    });
  }

}
