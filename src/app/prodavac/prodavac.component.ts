import { Component } from '@angular/core';
import { Porudzbina } from '../models/porudzbina';
import { Kasa } from '../models/kasa';

@Component({
  selector: 'app-prodavac',
  templateUrl: './prodavac.component.html',
  styleUrls: ['./prodavac.component.css']
})
export class ProdavacComponent {
  constructor(){
    this.kasa = JSON.parse(localStorage.getItem("kasa"));
    console.log(this.kasa);
  }

  kasa:Kasa[]=[];
  naziv:string;
  opis:string;
  sastojci:string;
  cena:number;
  slika:string;

}
