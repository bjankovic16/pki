import { Component } from '@angular/core';
import { Slatkis } from '../models/slatkis';

@Component({
  selector: 'app-kolaci',
  templateUrl: './kolaci.component.html',
  styleUrls: ['./kolaci.component.css']
})
export class KolaciComponent {

  constructor() {
    this.kolaci=JSON.parse(localStorage.getItem("kolaci"));
    for(let kolac of this.kolaci){
      this.images.push(kolac.slika);
    }
    this.paginateImages();
  }

  kolaci:Slatkis[];
  images=[];
  itemsPerRow = 3;
  itemsPerPage = this.itemsPerRow;
  currentPage = 1;
  paginatedImages: any[] = [];
  pages: number[] = [];

  paginateImages(): void {
    const numberOfPages = Math.ceil(this.kolaci.length / this.itemsPerPage);
    this.pages = Array.from({ length: numberOfPages }, (_, index) => index + 1);

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const slicedImages = this.kolaci.slice(startIndex, endIndex);

    this.paginatedImages = [];
    for (let i = 0; i < slicedImages.length; i += this.itemsPerRow) {
      this.paginatedImages.push(slicedImages.slice(i, i + this.itemsPerRow));
    }
  }

  setCurrentPage(page: number): void {
    this.currentPage = page;
    this.paginateImages();
  }
}
