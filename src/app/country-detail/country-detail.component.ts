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

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const countryId = params.get('id');
      if (countryId) {
        this.apiService.getCountryDetails(countryId).subscribe(
          details => {
            console.log('Country Details:', details);
            this.countryDetails = details;
          },
          error => {
            console.error('Error fetching country details:', error);
          }
        );
      }
    });
  }

  getObjectProperties(obj: any): string[] {
    return Object.keys(obj);
  }
}
