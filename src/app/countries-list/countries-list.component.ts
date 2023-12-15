// countries-list.component.ts

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
  searchTerm: string = '';
  countries: any[] = [];
  filteredCountries: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // Chargez les pays au début
    this.apiService.getCountries().subscribe(
      response => {
        this.countries = response;
        this.filteredCountries = response;
      },
      error => {
        console.error('Error fetching countries:', error);
      }
    );
  }

  onSearch(): void {
    // Mettez à jour la liste filtrée en fonction du terme de recherche
    this.filteredCountries = this.countries.filter(country =>
      country.name.common.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
