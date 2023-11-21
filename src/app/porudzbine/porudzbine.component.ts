import { Component } from '@angular/core';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-porudzbine',
  templateUrl: './porudzbine.component.html',
  styleUrls: ['./porudzbine.component.css']
})
export class PorudzbineComponent {
  
  constructor(){
    this.korisnik=JSON.parse(localStorage.getItem("prijavljen"));
  }

  korisnik:Korisnik;

}
