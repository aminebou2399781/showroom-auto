import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeadBar } from './head-bar/head-bar';
import { SearchBar } from './search-bar/search-bar';
import { Auto } from './auto';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HeadBar, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  autoList: Auto[] = [
    { brand: 'BMW', model: 'X2', price: 210000, power: 9, photo: 'images/X2.webp', units: 5 },
    { brand: 'BMW', model: 'X3', price: 290000, power: 11, photo: 'images/X3.webp', units: 3 },
    { brand: 'BMW', model: 'iX', price: 420000, power: 15, photo: 'images/IX.webp', units: 2 },
    { brand: 'Audi', model: 'A3', price: 163000, power: 6, photo: 'images/A3.webp', units: 11 },
    { brand: 'Audi', model: 'Q3', price: 205000, power: 8, photo: 'images/Q3.webp', units: 7 },
    { brand: 'Audi', model: 'Q5', price: 270000, power: 10, photo: 'images/Q5.webp', units: 4 },
    { brand: 'Mercedes', model: 'Classe C', price: 240000, power: 9, photo: 'images/CLASS-C.webp', units: 6 },
    { brand: 'Mercedes', model: 'GLA', price: 215000, power: 8, photo: 'images/GLA.webp', units: 5 },
    { brand: 'Mercedes', model: 'GLE', price: 380000, power: 13, photo: 'images/GLE.webp', units: 3 },
    { brand: 'Land Rover', model: 'Defender', price: 450000, power: 14, photo: 'images/DEFENDER.webp', units: 2 },
    { brand: 'Land Rover', model: 'Evoque', price: 260000, power: 9, photo: 'images/EVOQUE.webp', units: 6 },
    { brand: 'Land Rover', model: 'Range Rover', price: 650000, power: 18, photo: 'images/RANGE.webp', units: 1 },
    { brand: 'Jaguar', model: 'E-Pace', price: 245000, power: 9, photo: 'images/EPACE.webp', units: 4 },
    { brand: 'Jaguar', model: 'F-Pace', price: 330000, power: 12, photo: 'images/FPACE.webp', units: 3 },
    { brand: 'Alfa Romeo', model: 'Giulia', price: 230000, power: 10, photo: 'images/GIULIA.webp', units: 5 },
    { brand: 'Alfa Romeo', model: 'Stelvio', price: 280000, power: 11, photo: 'images/STELVIO.webp', units: 4 }
  ];

  selectedAuto?: Auto;

  updateAuto(auto: Auto) {
    this.selectedAuto = auto;
  }
}
