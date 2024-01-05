import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-autre',
  templateUrl: './autre.component.html',
  styleUrls: ['./autre.component.css'],
})
export class AutreComponent implements OnInit {
  searchTerm: string = '';
  countries: any[] = [];
  filteredCountries: any[] = [];

  constructor(private apiService: ApiService) { }
// Ici on récup tout les pays encore une fois
  ngOnInit(): void {
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
}
