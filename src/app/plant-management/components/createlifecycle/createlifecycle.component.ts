import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {MatProgressBar} from "@angular/material/progress-bar";
import {DecimalPipe} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {ServicePlantManagementService} from "../../services/service-plant-management.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-createlifecycle',
  standalone: true,
  imports: [
    MatProgressBar,
    DecimalPipe,
    MatButton,
    FormsModule,
    MatInput,
    MatLabel,
    MatFormField
  ],
  templateUrl: './createlifecycle.component.html',
  styleUrl: './createlifecycle.component.css'
})
export class CreatelifecycleComponent{
  lifeCycleData = { planName: '', time: 0, about: '' };

  constructor(
    public dialogRef: MatDialogRef<CreatelifecycleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,  private plantService: ServicePlantManagementService,
    private router: Router
  ) {}

  startLifeCycle() {

    const lifeCyclePayload = {
      name_plant: this.lifeCycleData.planName,
      plant: this.data.plant,
      image: this.data.image,
      time: this.lifeCycleData.time,
      about: this.lifeCycleData.about
    };

    this.plantService.createLifeCycle(lifeCyclePayload).subscribe(() => {
      // Cerrar el diálogo y redirigir al usuario a la pantalla de ciclos de vida
      this.dialogRef.close();
      this.router.navigate(['/lifecycle']);
    });
  }
}
