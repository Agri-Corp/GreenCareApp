import { Component } from '@angular/core';
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {SidenavbarContentComponent} from "../../../public/components/sidenavbar-content/sidenavbar-content.component";
import {ToolbarContentComponent} from "../../../public/components/toolbar-content/toolbar-content.component";
import { ServicePlantManagementService } from '../../services/service-plant-management.service';
import {AccountManagementService} from "../../../account-management/service/account-management.service";
import {NgClass, NgIf} from "@angular/common";

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
    ToolbarContentComponent,
    NgClass,
    NgIf
  ],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.css'
})
export class PlansComponent {
  userPlan: string = 'freemium'; // Default user plan

  constructor(private service: ServicePlantManagementService, private  authorized: AccountManagementService) {}

  updatePlanToPremium() {
    const userId = this.authorized.getCurrentUserId(); // Assuming you have a method to get the current user ID
    this.service.updateUserPlan(userId, 'premium').subscribe(
      response => {
        this.userPlan = 'premium';
        console.log('User plan updated to premium:', response);
      },
      error => {
        console.error('Error updating user plan:', error);
      }
    );
  }
}
