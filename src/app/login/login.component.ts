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
