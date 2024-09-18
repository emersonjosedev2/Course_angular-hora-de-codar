import { Component,OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.scss'
})
export class ChangeNumberComponent implements OnInit{

  @Output() changeNumber: EventEmitter<any> = new EventEmitter()

  handleClick(){
    console.log('clickou')
    this.changeNumber.emit();
  }
 
  ngOnInit(): void {
    
  }
}
