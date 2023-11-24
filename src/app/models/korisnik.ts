import { Porudzbina } from "./porudzbina";

export class Korisnik{
    ime:string;
    prezime:string;
    adresa:string;
    telefon:string;
    korisnickoIme:string;
    lozinka:string;
    jeKupac:boolean=true;
    porudzbine:Porudzbina[]=[];
    trenutnaPorudzbina:Porudzbina=new Porudzbina();
}