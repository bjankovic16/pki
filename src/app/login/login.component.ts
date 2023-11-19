import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router) { }

  korisnickoIme:string;
  lozinka:string;

  login(){
    let korisnici=JSON.parse(localStorage.getItem("korisnici"));
    for(const korisnik of korisnici){
      if(korisnik.korisnickoIme==this.korisnickoIme && korisnik.lozinka==this.lozinka){
        this.router.navigate(['main'])
      }
    }
  }
}
