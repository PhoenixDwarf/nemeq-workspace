import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500',
}

@Component({
  selector: 'lib-nemeq-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nemeq-side-menu.html',
})
export class NemeqSideMenu {
  authenticated = input(false);
  title = input('Neme');
  subTitle = input('Q');
  titleColor = input<TitleColor>(TitleColor.green);

  login = output();
  logout = output();
}
