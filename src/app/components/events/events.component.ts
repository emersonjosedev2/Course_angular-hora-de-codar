import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent {
  message: boolean = true;
  exibir = 'Esconder mensagem';
  @Input() colors!: [string, string, string, string,string,string];

  color: string[] = ['black', 'red', 'orange', 'blue'];
  counter: number = 0;
  counterTF = true;

  viewMessage() {
    this.message = !this.message;
    this.exibir = this.message ? 'Esconder mensagem' : 'Mostrar mensagem';
  }

  ButtonColor() {
    if (this.counterTF === true) {
      this.counter++;

      if (this.counter >= 5) {
        this.counterTF = false;
      }
    } else {
      this.counter--;
    }
    if (this.counter <= 0) {
      this.counterTF = true;
    }

    console.log(this.counter);
  }
}
