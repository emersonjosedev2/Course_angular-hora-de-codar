import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.scss'
})
export class ListRenderComponent {

  animal = [
    {name: 'cavalo', t: 'terrestre', food: 'herbívoros'},
    {name:'Búfalo', t: 'terrestre', food: 'herbívoros'}


  ]
}
