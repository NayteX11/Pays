import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
  countries: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getCountries().subscribe(
      response => {
        console.log('Countries:', response.results);
        this.countries = response.results;
      },
      error => {
        console.error('Error fetching countries:', error);
      }
    );
  }
}
