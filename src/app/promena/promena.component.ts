import { Component } from '@angular/core';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-promena',
  templateUrl: './promena.component.html',
  styleUrls: ['./promena.component.css']
})
export class PromenaComponent {

  constructor() {
    this.korisnik = JSON.parse(localStorage.getItem("prijavljen"));
    this.korisnici = JSON.parse(localStorage.getItem("korisnici"));
  }

  korisnik: Korisnik;
  tekstPoruke: string;
  korisnici: Korisnik[];

  changeCredentials() {
    this.tekstPoruke = "Podaci promenjeni!";
    let indexPromena;
    for (let i = 0; i < this.korisnici.length; i++) {
      if (this.korisnici[i].korisnickoIme == this.korisnik.korisnickoIme) {
        indexPromena = i;
        break;
      }
    }
    this.korisnici.splice(indexPromena, 1);
    this.korisnici.push(this.korisnik);
    localStorage.setItem("prijavljen",JSON.stringify(this.korisnik));
    localStorage.setItem("korisnici",JSON.stringify(this.korisnici));
    document.getElementById('dialogOverlay').classList.add('active');
  }

  closeDialog() {
    document.getElementById('dialogOverlay').classList.remove('active');
  }

}
