import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatCheckbox} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";

export interface Task {
  title: string;
  completed: boolean;
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
    MatButton
  ],
  templateUrl: './lifecycledetails.component.html',
  styleUrl: './lifecycledetails.component.css'
})
export class LifecycledetailsComponent {

  constructor(
    public dialogRef: MatDialogRef<LifecycledetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { tasks: Task[] }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  toggleTaskCompletion(task: Task): void {
    task.completed = !task.completed;
  }
}
