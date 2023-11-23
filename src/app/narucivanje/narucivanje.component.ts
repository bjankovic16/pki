import { Component } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { Slatkis } from '../models/slatkis';
import { Porudzbina } from '../models/porudzbina';
import { naruceniSlatkis } from '../models/naruceniSlatkis';
import { Router } from '@angular/router';

@Component({
  selector: 'app-narucivanje',
  templateUrl: './narucivanje.component.html',
  styleUrls: ['./narucivanje.component.css']
})
export class NarucivanjeComponent {

	constructor(private router:Router){
		this.korisnik=JSON.parse(localStorage.getItem("prijavljen"));
		this.slatkis=JSON.parse(localStorage.getItem("odabraniSlatkis"));
		
		if(this.korisnik.trenutnaPorudzbina.status==-2){
			this.korisnik.trenutnaPorudzbina.broj=this.korisnik.porudzbine.length;
			this.korisnik.trenutnaPorudzbina.status=-1;
		}

		let naruceniSl=new naruceniSlatkis();
		naruceniSl.kolicina=1;
		naruceniSl.index=this.korisnik.trenutnaPorudzbina.naruceniSlatkisi.length;
		naruceniSl.slatkis=this.slatkis;
		this.korisnik.trenutnaPorudzbina.naruceniSlatkisi.push(naruceniSl);
		
		this.korisnik.trenutnaPorudzbina.cena += naruceniSl.slatkis.cena;
		this.promeniLocalStorage();
	}

	korisnik:Korisnik;
	slatkis:Slatkis;

	promeniLocalStorage(){
		localStorage.setItem("prijavljen",JSON.stringify(this.korisnik));
	}

	naruci(){
		this.korisnik.porudzbine.push(this.korisnik.trenutnaPorudzbina);
		this.korisnik.trenutnaPorudzbina.status=0;
		this.korisnik.trenutnaPorudzbina=new Porudzbina();
		this.promeniLocalStorage();
		this.router.navigate(['main/kolaci/odabraniSlatkis']);
	}

	handlePlusClick(naruceni:naruceniSlatkis){
		naruceni.kolicina++;
		this.korisnik.trenutnaPorudzbina.cena += naruceni.slatkis.cena;
		this.promeniLocalStorage();
	}

	handleMinusClick(naruceni:naruceniSlatkis){
		if(naruceni.kolicina!=1){
			naruceni.kolicina--;
			this.korisnik.trenutnaPorudzbina.cena -= naruceni.slatkis.cena;
			this.promeniLocalStorage();
		}
	}

	handleDeleteClick(naruceni:naruceniSlatkis){
		this.korisnik.trenutnaPorudzbina.cena -= naruceni.kolicina * naruceni.slatkis.cena;
		this.korisnik.trenutnaPorudzbina.naruceniSlatkisi.splice(naruceni.index,1);
		for(let i=naruceni.index; i<this.korisnik.trenutnaPorudzbina.naruceniSlatkisi.length; i++){
			this.korisnik.trenutnaPorudzbina.naruceniSlatkisi[i].index--;
		}
		this.promeniLocalStorage();
		if(this.korisnik.trenutnaPorudzbina.cena == 0){
			this.router.navigate(['main/kolaci/odabraniSlatkis']);
		}
	}
}
