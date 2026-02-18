import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NemeqSideMenu, TitleColor } from 'nemeq-side-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NemeqSideMenu],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  availableColors = TitleColor;
  authenticated = signal(false);

  login() {
    this.authenticated.set(true);
  }
  logout() {
    this.authenticated.set(false);
  }
}
