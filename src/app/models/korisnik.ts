import { Porudzbina } from "./porudzbina";

export class Korisnik{
    ime:string;
    prezime:string;
    adresa:string;
    telefon:string;
    korisnickoIme:string;
    lozinka:string;
    porudzbine:Porudzbina[]=[];
}