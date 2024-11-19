import { Component } from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardActions, MatCardContent, MatCardImage, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ToolbarContentComponent} from "../../../public/components/toolbar-content/toolbar-content.component";
import {SidenavbarContentComponent} from "../../../public/components/sidenavbar-content/sidenavbar-content.component";
import {MatDatepickerInput} from "@angular/material/datepicker";
import {MatAnchor, MatButton} from "@angular/material/button";
import {ServicePlantManagementService} from "../../services/service-plant-management.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    SidenavbarContentComponent,
    ToolbarContentComponent,
    MatCard,
    MatCardContent,
    MatGridList,
    MatGridTile,
    MatCardTitle,
    MatCardActions,
    MatLabel,
    MatFormField,
    MatDatepickerInput,
    MatInput,
    MatButton,
    MatAnchor,
    MatCardImage,
    FormsModule
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  oldPassword: string = '';
  newPassword: string = '';

  constructor(private service: ServicePlantManagementService) {}

  savePassword() {
    this.service.updatePasswordForAll(this.oldPassword, this.newPassword).subscribe(
      responses => {
        console.log('Passwords updated successfully:', responses);
      },
      error => {
        console.error('Error updating passwords:', error);
      }
    );
  }
}
