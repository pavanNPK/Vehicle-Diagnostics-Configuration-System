import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {OverlaySpinnerComponent} from "./modules/core/components/overlay-spinner/overlay-spinner.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OverlaySpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';
}
