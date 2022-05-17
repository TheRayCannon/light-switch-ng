import { outputAst } from '@angular/compiler';
import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent  {

  @Input() button = "Press ME"
  @Output() toggle = new EventEmitter<Event>();
   lightSwitch(){
     this.toggle.emit()
   }



}