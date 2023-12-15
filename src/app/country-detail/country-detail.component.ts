// country-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  countryDetails: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    const countryId = this.route.snapshot.paramMap.get('id');
    if (countryId) {
      this.apiService.getCountryDetails(countryId).subscribe(
        response => {
          console.log('Country details:', response);
          this.countryDetails = response;
        },
        error => {
          console.error('Error fetching country details:', error);
        }
      );
    }
  }

  // Ajoutez une méthode pour définir le type de currency
  isCurrencies(value: any): value is { name: string; symbol: string } {
    return value && typeof value.name === 'string' && typeof value.symbol === 'string';
  }

  
}
