import { Routes } from '@angular/router';
import {HomeComponent} from "./plant-management/components/home/home.component";
import {GardenComponent} from "./plant-management/components/garden/garden.component";
import {LifeCycleComponent} from "./plant-management/components/life-cycle/life-cycle.component";
import {PlansComponent} from "./plant-management/components/plans/plans.component";
import {SettingsComponent} from "./plant-management/components/settings/settings.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'garden',
    component: GardenComponent
  },
  {
    path: 'lifecycle',
    component: LifeCycleComponent
  },
  {
    path: 'plans',
    component: PlansComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  { path: '',
    redirectTo: 'home', pathMatch: 'full'
  },
  { path: '**',
    component: PageNotFoundComponent
  },
];
