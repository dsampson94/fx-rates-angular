import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FxRateComponent } from './fx-rate/fx-rate.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FxRateComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fx-rates-angular';
}
