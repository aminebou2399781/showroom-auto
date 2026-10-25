import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Auto } from '../auto';

@Component({
  selector: 'app-search-bar',
  imports: [CommonModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  @Input() autos: Auto[] = [];
  @Output() selectAutoEvent = new EventEmitter<Auto>();
  result: Auto[] = [];

  searchAutoList(brand: string) {
    this.result = this.autos.filter(
      a => a.brand.toLowerCase() === brand.trim().toLowerCase()
    );
  }

  selectedAuto(auto: Auto) {
    this.selectAutoEvent.emit(auto);
  }
}
