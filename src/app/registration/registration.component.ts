import { Component } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private router:Router){
    
  }

  ime:string;
  prezime:string;
  adresa:string;
  telefon:string;
  korisnickoIme:string;
  lozinka:string;
  tekstPoruke:string;
  flagPrikaz:boolean;

  registration(){
    let korisnici=JSON.parse(localStorage.getItem("korisnici"));
    if(korisnici==null){
      korisnici=[];
    }
  
    for(let korisnik of korisnici){
      if(korisnik.korisnickoIme==this.korisnickoIme){
        this.tekstPoruke="Postoji korisnik sa istim korisničkim imenom."
        this.flagPrikaz=true;
        document.getElementById('dialogOverlay').classList.add('active');
        return;
      }
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
    this.tekstPoruke="Uspešna registracija!"
    this.flagPrikaz=false;
    document.getElementById('dialogOverlay').classList.add('active');
  }

  closeDialog() {
    document.getElementById('dialogOverlay').classList.remove('active');
    if(!this.flagPrikaz){
      this.router.navigate(['login']);
    }
  }

}
