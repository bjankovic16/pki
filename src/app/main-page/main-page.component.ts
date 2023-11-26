import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from '../services/timer';
import { Slatkis } from '../models/slatkis';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit, OnDestroy {
  
  constructor(private timerService: TimerService,private router:Router) {
    let palacinkeVocne=new Slatkis();
    palacinkeVocne.naziv="Palačinke sa voćnim prelivom";
    palacinkeVocne.opis="Palačinke sa voćnim prelivom savršeni izbor za sve ljubitelje palačinki."
    palacinkeVocne.sastojci="Jaja, brašno, med, mleko, jagode, borovnice, voćni preliv."
    palacinkeVocne.cena=300;
    palacinkeVocne.slika="../../assets/kolaci/palacinkaVocniPreliv.png";
    palacinkeVocne.id=0;

    palacinkeVocne.komentari.push("Odličan ukus svima preporucujem. Pozdrav Maja!");
    palacinkeVocne.komentari.push("Cena pristupačna. Odličan ukus. Preporučujem.");
    palacinkeVocne.komentari.push("Mnoooogo slatko");


    let palacinkeKing=new Slatkis();
    palacinkeKing.opis="Palačinke sa voćnim prelivom savršeni izbor za sve ljubitelje palačinki."
    palacinkeKing.sastojci="Jaja, brašno, med, mleko, jagode, borovnice, voćni preliv."
    palacinkeKing.cena=300;
    palacinkeKing.slika="../../assets/kolaci/king.png"
    palacinkeKing.id=1;

    let palacinkeMedodjija=new Slatkis();
    palacinkeMedodjija.opis="Palačinke sa voćnim prelivom savršeni izbor za sve ljubitelje palačinki."
    palacinkeMedodjija.sastojci="Jaja, brašno, med, mleko, jagode, borovnice, voćni preliv."
    palacinkeMedodjija.cena=300;
    palacinkeMedodjija.slika="../../assets/kolaci/medodjija.png"
    palacinkeMedodjija.id=2;

    let kolaci=[];
    kolaci.push(palacinkeVocne);
    kolaci.push(palacinkeKing);
    kolaci.push(palacinkeMedodjija);
    kolaci.push(palacinkeKing);
    localStorage.setItem("kolaci",JSON.stringify(kolaci));
    localStorage.setItem("torte",JSON.stringify([]))
  }
  
  image1:string="../../assets/promocija1.png";
  image2:string="../../assets/promocija2.png";
  image3:string="../../assets/promocija3.png";
  image4:string="../../assets/promocija4.png";

  ngOnInit(): void {
    this.timerService.startTimer(() => {
      let v=this.image1;
      this.image1=this.image2;
      this.image2=this.image3;
      this.image3=this.image4;
      this.image4=v;
    });
  }

  ngOnDestroy(): void {
    this.timerService.stopTimer();
  }

  navigate(tip:string){
    this.router.navigate(["main/kolaci"]);
    localStorage.setItem("prikaz",JSON.stringify(tip));
  }

  narucivanje(){
    localStorage.setItem("odabraniSlatkis",JSON.stringify(null));
    this.router.navigate(["main/narucivanje"]);
  }

}