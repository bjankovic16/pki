import { naruceniSlatkis } from "./naruceniSlatkis";

export class Porudzbina{
    broj:number;
    cena:number = 0;
    status:number = -2;//0 cekanje 1 prihvacena 2 odbijena -1 nije narucena -2 nedodeljena
    naruceniSlatkisi:naruceniSlatkis[] = [];
}