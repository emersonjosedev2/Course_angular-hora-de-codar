import { Component } from '@angular/core';
import { Animal } from '../../Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.scss',
})
export class ListRenderComponent {

   animalDetails = ''

  animal: Animal[] = [
    { name: 'cavalo', t: 'terrestre', food: 'herbívoros', avarageAge: 25 },
    { name: 'Búfalo', t: 'terrestre', food: 'herbívoros', avarageAge: 15 },
  ];
  animal1 = [
    { name: 'cavalo', t: 'terrestre', food: 'herbívoros', avarageAge: 25 },
    { name: 'Búfalo', t: 'terrestre', food: 'herbívoros', avarageAge: 15 },
  ];


  showAge(animal: Animal){
     this.animalDetails = `O pet ${animal.name} tem ${animal.avarageAge} anos! `
  }
}
