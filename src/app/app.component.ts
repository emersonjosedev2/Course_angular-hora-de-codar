import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  userName = 'Emerson';
  title = 'angular';
  userData = {
    email: 'emerson@gmail.com',
    role: 'Aprendiz',
  };
  games = {
    sonic: ['sonic monster', 'sonic origins'] as [string, string],
    superMario: [
      'Super Mario Bros Wonder',
      'Super Mario Odyssey',
      'Mario & Luigi: Brothership',
    ] as [string, string, string],

    priceSuperMario: [299.0] as [number],

    priceSonic: [22.4, 55.3] as [number, number],

    plataform: [
      'android',
      'Windows',
      'iOS',
      'Xbox-One',
      'Playstation 5',
      'Nintendo Switch',
    ] as [string, string, string, string, string, string],


 
  };
  colors = ['red','black', 'yellow', 'green','blue','orange'] as [string,string,string,string,string,string]

  class = 'class'
  
}
