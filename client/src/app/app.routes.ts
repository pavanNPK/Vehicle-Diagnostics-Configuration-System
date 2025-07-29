import { Routes } from '@angular/router';
import { PageNotFoundComponent } from "./modules/core/components/page-not-found/page-not-found.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/view',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
