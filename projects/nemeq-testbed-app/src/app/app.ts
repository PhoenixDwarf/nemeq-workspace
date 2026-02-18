import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NemeqSideMenu } from 'nemeq-side-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NemeqSideMenu],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('nemeq-testbed-app');
}
