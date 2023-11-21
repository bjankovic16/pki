import { Component } from '@angular/core';
import { Slatkis } from '../models/slatkis';

@Component({
  selector: 'app-komentari',
  templateUrl: './komentari.component.html',
  styleUrls: ['./komentari.component.css']
})
export class KomentariComponent {
  
  constructor(){
    this.odabraniSlatkis = JSON.parse(localStorage.getItem("odabraniSlatkis"));
    console.log(this.odabraniSlatkis.naziv)
  }

  odabraniSlatkis:Slatkis;
  isVisible=false;
  komentar:string;

  komentarisi(){
    this.isVisible=!this.isVisible;
    console.log("ovde1")
  }

  dodajKomentar(){
    console.log("ovde2")
    this.isVisible=!this.isVisible;
    this.odabraniSlatkis.komentari.push(this.komentar);
    localStorage.setItem("odabraniSlatkis",JSON.stringify(this.odabraniSlatkis));
    //namestiti na osnovu id kad dodas sve... 
    // vratiti ga u niz i uraditi revalidaciju
    window.location.reload();
  }

}
