import { Component } from '@angular/core';

@Component({
  selector: 'app-night-light',
  templateUrl: './night-light.component.html',
  styleUrls: ['./night-light.component.css']
})
export class NightLightComponent {
 lumos = false
 castLumos(){
   this.lumos = !this.lumos
 }
}
