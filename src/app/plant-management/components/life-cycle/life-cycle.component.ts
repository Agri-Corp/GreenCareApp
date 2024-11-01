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
import {FunctionsService} from "../../../functions-management/service/functions.service";
import {ActivatedRoute} from "@angular/router";

interface Lifecycle {
  userId: string;
  name_plant: string;
  plant: string;
  value: number;
  image: string;
  status: string;
  time: string;
}

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

  lifecycle: Lifecycle = {
    userId: '',
    name_plant: '',
    plant: '',
    value: 0,
    image: '',
    status: 'Good',
    time: ''
  };

  plantId: string | null = null;
  progressValue: number = 0; // Para la barra de progreso

  constructor(private plantService: ServicePlantManagementService, private route: ActivatedRoute,
              private functionsService: FunctionsService) {}

  ngOnInit(): void {
    this.loadLifeCycles();
    this.plantId = this.route.snapshot.paramMap.get('id');
    // Aquí se obtiene la planta usando el servicio
    this.getPlantDetails(this.plantId);
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
  getPlantDetails(id: string | null): void {
    this.functionsService.getPlantDetails(id).subscribe(data => {
      this.lifecycle.image = data.image;
      this.lifecycle.plant = data.plant;
    });
  }

  createLifecycle() {
    const userId = 'your_user_id'; // Debes obtener el ID del usuario actual
    this.lifecycle.userId = userId;
    // Realiza el POST para crear el ciclo de vida
    this.functionsService.createLifecycle(this.lifecycle).subscribe(() => {
      // Inicia el temporizador para la barra de progreso
      this.startProgress();
    });
  }

  startProgress() {
    const totalTimeInDays = parseInt(this.lifecycle.time); // Convierte a días
    const interval = (totalTimeInDays * 24 * 60 * 60 * 1000) / 100; // Divide el tiempo por 100 para el progreso
    let currentValue = 0;

    const progressInterval = setInterval(() => {
      if (currentValue < 100) {
        currentValue++;
        this.progressValue = currentValue; // Actualiza el valor de progreso
      } else {
        clearInterval(progressInterval); // Detiene el intervalo
      }
    }, interval);
  }
}
