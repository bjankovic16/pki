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
    //localStorage.clear();
    if (JSON.parse(localStorage.getItem("inicijalizacija")) == null) {
      localStorage.setItem("inicijalizacija", JSON.stringify(true));
      this.inicKorisnici();
      this.inicSlatkisi();
      console.log("ovde");
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
    palacinkeKing.naziv = "King"
    palacinkeKing.opis = "King palačinka samo za prave kraljeve."
    palacinkeKing.sastojci = "Jaja, brašno, med, mleko, jagode, šlag, borovnice, čokoladni preliv preliv."
    palacinkeKing.cena = 500;
    palacinkeKing.slika = "../../assets/kolaci/king.png"

    let palacinkeMedodjija = new Slatkis();
    palacinkeMedodjija.naziv = "Medođija"
    palacinkeMedodjija.opis = "Palačinke medođija kao da su je pčele pravile."
    palacinkeMedodjija.sastojci = "Jaja, brašno, med, mleko, voćni preliv."
    palacinkeMedodjija.cena = 600;
    palacinkeMedodjija.slika = "../../assets/kolaci/medodjija.png"

    let bombonice = new Slatkis();
    bombonice.naziv = "Čoko bomba";
    bombonice.opis = "Samo za prave ljubitelje čokolade.";
    bombonice.sastojci = "Jaja, brašno, čokolada, malina, šećer, med.";
    bombonice.cena = 750;
    bombonice.slika = "../../assets/kolaci/bombonice_kolac.png";

    let cokoladni = new Slatkis();
    cokoladni.naziv = "Čokoooos";
    cokoladni.opis = "Samo za prave ljubitelje istančanog ukusa.";
    cokoladni.sastojci = "Jaja, brašno, čokolada, griz, šećer.";
    cokoladni.cena = 650;
    cokoladni.slika = "../../assets/kolaci/cokoladni_kolac.png";

    let vanilice = new Slatkis();
    vanilice.naziv = "Vanilice";
    vanilice.opis = "Samo za ljubitelje dobrih i proverenih stvari.";
    vanilice.sastojci = "Jaja, brašno, vanila, griz, šećer, jaja.";
    vanilice.cena = 450;
    vanilice.slika = "../../assets/kolaci/vanilice_kolac.png";

    let kolaci = [];
    kolaci.push(palacinkeVocne);
    kolaci.push(palacinkeKing);
    kolaci.push(palacinkeMedodjija);
    kolaci.push(bombonice);
    kolaci.push(cokoladni);
    kolaci.push(vanilice);


    let rozalija = new Slatkis();
    rozalija.naziv = "Rozalija";
    rozalija.opis = "Samo za ljubitelje novih ukusa.";
    rozalija.sastojci = "Jaja, brašno, vanila, griz, šećer, jaja, čokolada, šlag, piškote.";
    rozalija.cena = 3000;
    rozalija.slika = "../../assets/torte/rozalija_torta.png";

    let cokolino = new Slatkis();
    cokolino.naziv = "Čokolino";
    cokolino.opis = "Ovo morate probati, najnoviji ukus.";
    cokolino.sastojci = "Jaja, brašno, vanila, griz, šećer, jaja, čokolada, šlag, piškote, malina, nana, plazma.";
    cokolino.cena = 5000;
    cokolino.slika = "../../assets/torte/cokolino_torta.png";

    let borovica = new Slatkis();
    borovica.naziv = "Borovica";
    borovica.opis = "Ukus borovnice sa kupinama na vrhu sigurno neće razočarati.";
    borovica.sastojci = "Jaja, brašno, vanila, griz, šećer, jaja, čokolada, šlag, piškote, kupine, borovnice, plazma.";
    borovica.cena = 4000;
    borovica.slika = "../../assets/torte/borovica_torta.png";
    
    let vocna = new Slatkis();
    vocna.naziv = "Voćni specijal";
    vocna.opis = "Pravo osveženje u vrelim danima.";
    vocna.sastojci = "Jaja, brašno, vanila šećer, jaja, čokolada, šlag, piškote, kupine, borovnice, jagode, maline, plazma.";
    vocna.cena = 4900;
    vocna.slika = "../../assets/torte/vocni_torta.png";

    let ciz = new Slatkis();
    ciz.naziv = "Čiz kejk";
    ciz.opis = "Nešto novooooo.";
    ciz.sastojci = "Jaja, brašno, vanila šećer, jaja, čokolada, šlag, piškote, plazma.";
    ciz.cena = 7000;
    ciz.slika = "../../assets/torte/ciz_torta.png";

    let rodj = new Slatkis();
    rodj.naziv = "Rođendanska";
    rodj.opis = "Najbolje za rođendan.";
    rodj.sastojci = "Jaja, brašno, vanila šećer, jaja, čokolada, šlag, piškote, plazma.";
    rodj.cena = 10000;
    rodj.slika = "../../assets/torte/rodjendanska_torta.png";

    let torte = [];
    torte.push(rozalija);
    torte.push(cokolino);
    torte.push(borovica);
    torte.push(vocna);
    torte.push(ciz);
    torte.push(rodj);

    localStorage.setItem("kolac", JSON.stringify(kolaci));
    localStorage.setItem("torta", JSON.stringify(torte))
  }

}
