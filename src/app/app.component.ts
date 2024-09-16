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
    sonic: ['sonic monster','sonic origins'] as [string, string],
    price:[22, 55, ] as [number, number,] ,
    plataform:['android', 'Windows','iOS','Xbox-One', 'Playstation 5','Nintendo Switch' ] as [string, string, string, string, string, string]
  }
}
