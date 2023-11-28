import { Component } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { Slatkis } from '../models/slatkis';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  ngOnInit() {
    localStorage.clear();
    if (JSON.parse(localStorage.getItem("inicijalizacija")) == null) {
      localStorage.setItem("inicijalizacija", JSON.stringify(true));
      this.inicKorisnici();
      this.inicSlatkisi();
    }
  }

  inicKorisnici() {
    let korisnik = new Korisnik();
    korisnik.ime = "Mika";
    korisnik.prezime = "Mikic";
    korisnik.adresa = "Beogradska bb";
    korisnik.telefon = "036/555/333";
    korisnik.korisnickoIme = "a";
    korisnik.lozinka = "a";

    let prodavac = new Korisnik();
    prodavac.ime = "Admin";
    prodavac.prezime = "Admin";
    prodavac.adresa = "Beogradska bb";
    prodavac.telefon = "036/444/333";
    prodavac.korisnickoIme = "b";
    prodavac.lozinka = "b";
    prodavac.jeKupac = false;

    let korisnici = JSON.parse(localStorage.getItem("korisnici"));
    if (korisnici == null) {
      korisnici = [];
    }
    korisnici.push(korisnik);
    korisnici.push(prodavac);
    localStorage.setItem("korisnici", JSON.stringify(korisnici));
  }

  inicSlatkisi() {
    let palacinkeVocne = new Slatkis();
    palacinkeVocne.naziv = "Palačinke sa voćnim prelivom";
    palacinkeVocne.opis = "Palačinke sa voćnim prelivom savršeni izbor za sve ljubitelje palačinki."
    palacinkeVocne.sastojci = "Jaja, brašno, med, mleko, jagode, borovnice, voćni preliv."
    palacinkeVocne.cena = 300;
    palacinkeVocne.slika = "../../assets/kolaci/palacinkaVocniPreliv.png";

    palacinkeVocne.komentari.push("Odličan ukus svima preporucujem. Pozdrav Maja!");
    palacinkeVocne.komentari.push("Cena pristupačna. Odličan ukus. Preporučujem.");
    palacinkeVocne.komentari.push("Mnoooogo slatko");


    let palacinkeKing = new Slatkis();
    palacinkeKing.opis = "Palačinke sa voćnim prelivom savršeni izbor za sve ljubitelje palačinki."
    palacinkeKing.sastojci = "Jaja, brašno, med, mleko, jagode, borovnice, voćni preliv."
    palacinkeKing.cena = 300;
    palacinkeKing.slika = "../../assets/kolaci/king.png"

    let palacinkeMedodjija = new Slatkis();
    palacinkeMedodjija.opis = "Palačinke sa voćnim prelivom savršeni izbor za sve ljubitelje palačinki."
    palacinkeMedodjija.sastojci = "Jaja, brašno, med, mleko, jagode, borovnice, voćni preliv."
    palacinkeMedodjija.cena = 300;
    palacinkeMedodjija.slika = "../../assets/kolaci/medodjija.png"

    let kolaci = [];
    kolaci.push(palacinkeVocne);
    kolaci.push(palacinkeKing);
    kolaci.push(palacinkeMedodjija);
    kolaci.push(palacinkeKing);
    localStorage.setItem("kolac", JSON.stringify(kolaci));
    localStorage.setItem("torta", JSON.stringify([]))
  }

}
