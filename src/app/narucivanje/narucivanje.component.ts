import { Component } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { Slatkis } from '../models/slatkis';
import { Porudzbina } from '../models/porudzbina';
import { naruceniSlatkis } from '../models/naruceniSlatkis';

@Component({
  selector: 'app-narucivanje',
  templateUrl: './narucivanje.component.html',
  styleUrls: ['./narucivanje.component.css']
})
export class NarucivanjeComponent {

	constructor(){
		this.korisnik=JSON.parse(localStorage.getItem("prijavljen"));
		this.slatkis=JSON.parse(localStorage.getItem("odabraniSlatkis"));
		
		if(this.korisnik.trenutnaPorudzbina==null){
			let porudzbina=new Porudzbina();
			porudzbina.broj=this.korisnik.porudzbine.length;
			porudzbina.status=-1;
			this.korisnik.trenutnaPorudzbina=porudzbina;
		}

		let naruceniSl=new naruceniSlatkis();
		naruceniSl.kolicina=1;
		naruceniSl.index=this.korisnik.trenutnaPorudzbina.naruceniSlatkisi.length;
		naruceniSl.slatkis=this.slatkis;

		this.korisnik.trenutnaPorudzbina.naruceniSlatkisi.push(naruceniSl);
		this.korisnik.trenutnaPorudzbina.naruceniSlatkisi.push(naruceniSl);
		this.korisnik.trenutnaPorudzbina.naruceniSlatkisi.push(naruceniSl);
		this.korisnik.trenutnaPorudzbina.naruceniSlatkisi.push(naruceniSl);
		this.korisnik.trenutnaPorudzbina.naruceniSlatkisi.push(naruceniSl);
		
		this.korisnik.trenutnaPorudzbina.cena += naruceniSl.slatkis.cena;
	}

	korisnik:Korisnik;
	slatkis:Slatkis;

	naruci(){
		
	}

}
