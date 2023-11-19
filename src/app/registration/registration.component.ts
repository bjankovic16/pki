import { Component } from '@angular/core';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  ime:string;
  prezime:string;
  adresa:string;
  telefon:string;
  korisnickoIme:string;
  lozinka:string;

  registration(){
    let korisnici=JSON.parse(localStorage.getItem("korisnici"));
    if(korisnici==null){
      korisnici=[];
    }
    let k=new Korisnik();
    k.ime=this.ime;
    k.prezime=this.prezime;
    k.adresa=this.adresa;
    k.telefon=this.telefon;
    k.korisnickoIme=this.korisnickoIme;
    k.lozinka=this.lozinka;
    korisnici.push(k);
    localStorage.setItem("korisnici",JSON.stringify(korisnici));
    console.log("upis")
  }
}
