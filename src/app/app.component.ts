import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslocoPipe} from '@ngneat/transloco';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslocoPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-starter';
}
