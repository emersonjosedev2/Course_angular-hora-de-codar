import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  message: boolean = true
  exibir = 'Esconder mensagem'
  viewMessage(){
    this.message = !this.message
    if (this.message == true){
      this.exibir = 'Esconder mensagem'

    }
    else{
      this.exibir = 'Mostrar mensagem'
    }
  }

}
