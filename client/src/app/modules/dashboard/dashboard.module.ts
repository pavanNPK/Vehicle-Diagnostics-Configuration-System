import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { ViewBoardComponent } from './view-board/view-board.component';
import {NoDataComponent} from "../core/components/no-data/no-data.component";
import {
  NbButtonModule, NbDatepickerModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbThemeModule,
} from "@nebular/theme";
import {ListVehiclesComponent} from "../vehicles/list-vehicles/list-vehicles.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ViewBoardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NoDataComponent,
    NbButtonModule,
    NbIconModule,
    NbThemeModule.forRoot(),
    ListVehiclesComponent,
    NbInputModule,
    FormsModule,
    NbFormFieldModule,
    NbDatepickerModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
