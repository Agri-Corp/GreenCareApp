import { Component } from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardActions, MatCardContent, MatCardImage, MatCardTitle} from "@angular/material/card";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ToolbarContentComponent} from "../../../public/components/toolbar-content/toolbar-content.component";
import {SidenavbarContentComponent} from "../../../public/components/sidenavbar-content/sidenavbar-content.component";
import {MatDatepickerInput} from "@angular/material/datepicker";
import {MatAnchor, MatButton} from "@angular/material/button";

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
    MatCardImage
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

}
