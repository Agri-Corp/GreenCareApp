import { Component } from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {SidenavbarContentComponent} from "../../../public/components/sidenavbar-content/sidenavbar-content.component";
import {ToolbarContentComponent} from "../../../public/components/toolbar-content/toolbar-content.component";

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [
    MatGridList,
    MatGridTile,
    MatCard,
    MatCardContent,
    MatCardTitle,
    SidenavbarContentComponent,
    ToolbarContentComponent
  ],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {

}
