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

  //Ici on va récupérer tout les données correspondant au countryId 
  // pour chaque pays, qu'on va ensuite afficher via html
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

  isCurrencies(value: any): value is { name: string; symbol: string } {
    return value && typeof value.name === 'string' && typeof value.symbol === 'string';
  }
}
