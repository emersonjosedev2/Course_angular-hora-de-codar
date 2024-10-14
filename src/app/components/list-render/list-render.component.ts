import { Component } from '@angular/core';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.scss',
})
export class ListRenderComponent {

   animalDetails = ''

  animals: Animal[] = [];

  animal1 = [
    { name: 'cavalo', t: 'terrestre', food: 'herbívoros', avarageAge: 25 },
    { name: 'Búfalo', t: 'terrestre', food: 'herbívoros', avarageAge: 15 },
    
  ];

   constructor(private listService: ListService){
    this.getAnimals()
   }

  showAge(animal: Animal){
     this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos! `
  }

  remove(animal: Animal){
    console.log('Animal removido')
    this.animals = this.listService.remove(this.animals,animal)
  }

  getAnimals(): void{

    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

  
}
