import { Component } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { Slatkis } from '../models/slatkis';
import { Porudzbina } from '../models/porudzbina';
import { naruceniSlatkis } from '../models/naruceniSlatkis';
import { Router } from '@angular/router';
import { Kasa } from '../models/kasa';

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
			this.korisnik.trenutnaPorudzbina.broj=this.korisnik.porudzbine.length+1;
			this.korisnik.trenutnaPorudzbina.status=-1;
		}

		let naruceniSl=new naruceniSlatkis();
		naruceniSl.kolicina=1;
		naruceniSl.index=this.korisnik.trenutnaPorudzbina.naruceniSlatkisi.length;
		naruceniSl.slatkis=this.slatkis;
		this.korisnik.trenutnaPorudzbina.naruceniSlatkisi.push(naruceniSl);
		
		this.korisnik.trenutnaPorudzbina.cena += naruceniSl.slatkis.cena;
		this.promeniPrijavljenStorage();
	}

	korisnik:Korisnik;
	slatkis:Slatkis;

	promeniPrijavljenStorage(){
		localStorage.setItem("prijavljen",JSON.stringify(this.korisnik));
	}

	promeniLocalStorage(){
		localStorage.setItem("prijavljen",JSON.stringify(this.korisnik));
		let korisnici:Korisnik[]=JSON.parse(localStorage.getItem("korisnici"));
		let index;
		for(let i=0; i<korisnici.length; i++){
		  if(korisnici[i].korisnickoIme==this.korisnik.korisnickoIme){
			index=i;
			break;
		  }
		}
		korisnici[index]=this.korisnik;
		localStorage.setItem("korisnici",JSON.stringify(korisnici));
		console.log(korisnici);
	}

	naruci(){
		this.korisnik.trenutnaPorudzbina.status=0;
		this.korisnik.porudzbine.push(this.korisnik.trenutnaPorudzbina);
		
		let kasa = JSON.parse(localStorage.getItem("kasa"));
		if(kasa == null){
			kasa=[];
		}
		let k = new Kasa();
		k.kupac = this.korisnik;
		k.porudzbina = this.korisnik.trenutnaPorudzbina;
		kasa.push(k);
		localStorage.setItem("kasa",JSON.stringify(kasa));

		this.korisnik.trenutnaPorudzbina=new Porudzbina();
		this.promeniLocalStorage();
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
	}
}
