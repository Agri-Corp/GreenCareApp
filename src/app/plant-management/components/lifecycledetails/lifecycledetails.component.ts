import {Component, Inject, OnInit} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatCheckbox} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {ServicePlantManagementService} from "../../services/service-plant-management.service";

export interface Task {
  title: string;
  completed: boolean;
  lifeCycleId: string;
}
@Component({
  selector: 'app-lifecycledetails',
  standalone: true,
  imports: [
    MatDialogContent,
    MatCheckbox,
    MatDialogActions,
    FormsModule,
    NgForOf,
    MatDialogTitle,
    MatButton,
    NgIf
  ],
  templateUrl: './lifecycledetails.component.html',
  styleUrl: './lifecycledetails.component.css'
})
export class LifecycledetailsComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    public dialogRef: MatDialogRef<LifecycledetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { lifeCycleId: string },
    private service: ServicePlantManagementService
  ) {
    if (!data || !data.lifeCycleId) {
      console.error('LifeCycleId is not defined in the injected data');
    }
  }

  ngOnInit(): void {
    this.loadTasks();
    setInterval(() => this.loadTasks(), 3 * 60 * 60 * 1000); // Update tasks every 3 hours
  }

  loadTasks(): void {
    if (this.data && this.data.lifeCycleId) {
      this.service.getActivities(this.data.lifeCycleId).subscribe(tasks => {
        this.tasks = tasks;
      }, error => {
        console.error('Error fetching tasks:', error);
      });
    } else {
      console.error('LifeCycleId is not defined');
    }
  }

  toggleTaskCompletion(task: Task): void {
    task.completed = !task.completed;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
