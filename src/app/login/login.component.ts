import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from '../models/korisnik';
import { Porudzbina } from '../models/porudzbina';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router) {
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

    let p=new Porudzbina();
    p.broj=1;
    p.cena=2000;
    p.status=1;
    korisnik.porudzbine.push(p);
    p.status=0;
    korisnik.porudzbine.push(p);
    p.status=2;
    korisnik.porudzbine.push(p);
    korisnik.porudzbine.push(p);
    korisnik.porudzbine.push(p);
    korisnik.porudzbine.push(p);

    let korisnici=JSON.parse(localStorage.getItem("korisnici"));
    if(korisnici==null){
      korisnici=[];
    }
    korisnici.push(korisnik);
    korisnici.push(prodavac);
    localStorage.setItem("korisnici",JSON.stringify(korisnici));
  }

  korisnickoIme:string;
  lozinka:string;

  login(){
    let korisnici=JSON.parse(localStorage.getItem("korisnici"));
    for(const korisnik of korisnici){
      if(korisnik.korisnickoIme==this.korisnickoIme && korisnik.lozinka==this.lozinka){
        if(korisnik.jeKupac){
          localStorage.setItem("prijavljen",JSON.stringify(korisnik));
          this.router.navigate(['main'])  
        } else{
          this.router.navigate(['prodavac']);
        }
      }
    }
  }
}
