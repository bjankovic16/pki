import { Component } from '@angular/core';
import { Slatkis } from '../models/slatkis';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kolaci',
  templateUrl: './kolaci.component.html',
  styleUrls: ['./kolaci.component.css']
})
export class KolaciComponent {

  constructor(private router:Router) {
    this.kolaci=JSON.parse(localStorage.getItem("kolaci"));

    let cur=0;
    while(cur < this.kolaci.length){
      let arr=[];
      for(let i = 0; i < 3; i++){
        if(i + cur < this.kolaci.length){
          arr.push(this.kolaci[i+cur]);
        }
      }
      this.slicedImages.push(arr);
      cur+=3;
    }
  }

  slicedImages:any[][] = [];
  kolaci: Slatkis[] = [];
  itemsPerPage: number = 3;
  currentPage: number = 1;

  navigateToImage(slatkis:any){
    localStorage.setItem("odabraniSlatkis",JSON.stringify(slatkis));
    this.router.navigate(['main/kolaci/odabraniSlatkis']);
  }

  get totalPages(): number {
    return Math.ceil(this.kolaci.length / this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

}
