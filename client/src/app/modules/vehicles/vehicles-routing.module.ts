import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListVehiclesComponent} from "./list-vehicles/list-vehicles.component";
import {AddVehicleComponent} from "./add-vehicle/add-vehicle.component";

const routes: Routes = [
  {
    path: 'list', component: ListVehiclesComponent
  }, {
    path: 'add', component: AddVehicleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
