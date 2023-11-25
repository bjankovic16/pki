import { Component } from '@angular/core';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  ngOnInit(){
    localStorage.clear();
    let korisnik=new Korisnik();
    korisnik.ime="Mika";
    korisnik.prezime="Mikic";
    korisnik.adresa="Beogradska bb";
    korisnik.telefon="036/555/333";
    korisnik.korisnickoIme="a";
    korisnik.lozinka="a";

    let prodavac = new Korisnik();
    prodavac.ime="Mika";
    prodavac.prezime="Mikic";
    prodavac.adresa="Beogradska bb";
    prodavac.telefon="036/555/333";
    prodavac.korisnickoIme="b";
    prodavac.lozinka="b";
    prodavac.jeKupac=false;    

    let korisnici=JSON.parse(localStorage.getItem("korisnici"));
    if(korisnici==null){
      korisnici=[];
    }
    korisnici.push(korisnik);
    korisnici.push(prodavac);
    localStorage.setItem("korisnici",JSON.stringify(korisnici));
  }
}
