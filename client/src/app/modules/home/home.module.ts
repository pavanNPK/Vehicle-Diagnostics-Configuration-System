import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {NbEvaIconsModule} from "@nebular/eva-icons";
import {NbDatepickerModule, NbDialogModule, NbToastrModule, NbTooltipModule} from "@nebular/theme";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbEvaIconsModule,
    NbTooltipModule,
    NbDatepickerModule.forRoot(),
    NbToastrModule.forRoot(),
    NbDialogModule.forRoot(),
  ],
})
export class HomeModule { }
