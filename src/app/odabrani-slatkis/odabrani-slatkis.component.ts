import { Component } from '@angular/core';
import { Slatkis } from '../models/slatkis';
import { Router } from '@angular/router';

@Component({
  selector: 'app-odabrani-slatkis',
  templateUrl: './odabrani-slatkis.component.html',
  styleUrls: ['./odabrani-slatkis.component.css']
})
export class OdabraniSlatkisComponent {

  constructor(private router:Router){
    this.odabraniSlatkis = JSON.parse(localStorage.getItem("odabraniSlatkis"));
  }

  odabraniSlatkis:Slatkis;

  naruci(){
    this.router.navigate(['/main/kolaci/odabraniSlatkis/narucivanje'])
  } 

  komentarisi(){
    this.router.navigate(['/main/kolaci/odabraniSlatkis/komentari'])
  }
}
