import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Kasa } from '../models/kasa';
import { Korisnik } from '../models/korisnik';

@Component({
  selector: 'app-prodavac',
  templateUrl: './prodavac.component.html',
  styleUrls: ['./prodavac.component.css']
})
export class ProdavacComponent implements AfterViewInit{
  constructor(){
    this.kasa = JSON.parse(localStorage.getItem("kasa"));
  }

  kasa:Kasa[]=[];
  naziv:string;
  opis:string;
  sastojci:string;
  cena:number;
  slika:string;
  slikaNema: string="../../assets/picture-input.jpg"; 
  tip:string;
  tekstPoruke:string;

  @ViewChild('fileInput') fileInputRef!: ElementRef<HTMLInputElement>;

  selectedFile: File | null = null;

  ngAfterViewInit() {
    
  }

  openFileInput() {
    if (this.fileInputRef) {
      this.fileInputRef.nativeElement.click();
    }
  }

  onFileSelected(input: HTMLInputElement) {
    const files = input.files;

    if (files && files.length > 0) {
      this.selectedFile = files[0];
      this.slika = this.selectedFile.name;
      this.slikaNema = "../../assets/"+this.slika;
    }
  }

  dodajProizvod(){
    if(this.naziv!=null && this.opis!=null && this.sastojci!=null && this.slika!=null && this.tip!=null){
      this.tekstPoruke="Proizvod je u poslastičarnici";
    }else{
      this.tekstPoruke="Nisu uneti svi podaci";
    }
    document.getElementById('dialogOverlay').classList.add('active');
  }

  closeDialog() {
    document.getElementById('dialogOverlay').classList.remove('active');
  }

  izbaci(k:Kasa){
    let index=this.kasa.indexOf(k);
    this.kasa.splice(index,1);
    localStorage.setItem("kasa",JSON.stringify(this.kasa));
  }

  odobravanje(k:Kasa){
    this.izbaci(k);
    k.porudzbina.status=1;
    this.updateUsers(k);
  }

  odbijanje(k:Kasa){
    this.izbaci(k);
    k.porudzbina.status=2;
    this.updateUsers(k);
  }

  updateUsers(kasa:Kasa){
    let korisnici:Korisnik[]=JSON.parse(localStorage.getItem("korisnici"));
    let index;
    for(let i=0; i<korisnici.length; i++){
      if(korisnici[i].korisnickoIme==kasa.kupac.korisnickoIme){
        index=i;
        break;
      }
    }
    korisnici[index].porudzbine[kasa.porudzbina.broj-1].status=kasa.porudzbina.status;
    localStorage.setItem("korisnici",JSON.stringify(korisnici));
  }

}
