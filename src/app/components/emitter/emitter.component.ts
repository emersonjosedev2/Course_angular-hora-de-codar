import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.scss'
})
export class EmitterComponent {
    myNumber = 0

  onChangeNumber(){
    this.myNumber ++
  }
}
