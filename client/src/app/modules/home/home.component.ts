import { Component } from '@angular/core';
import {NbLayoutModule} from "@nebular/theme";
import {RouterOutlet} from "@angular/router";
import {NavbarComponent} from "../core/components/navbar/navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NbLayoutModule,
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
