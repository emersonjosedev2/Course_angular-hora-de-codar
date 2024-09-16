import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss'
})
export class FirstComponentComponent {
  name: string = 'Emerson';
  age: number = 22;
  profession: string = 'Programer';
  hobbies = ['estudar','jogar','barzinho'];
  car = {
    name: ' polo',
    year: 2019,
    color: ' red'

  }

}
