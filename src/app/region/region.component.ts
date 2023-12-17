// region.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {
  selectedRegions: { [region: string]: boolean } = {};
  regions: string[] = ['Africa', 'Asia', 'Europe', 'Americas', 'Oceania'];
  countries: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  onSelectRegions(): void {
    const selectedRegions = Object.keys(this.selectedRegions).filter(region => this.selectedRegions[region]);

    if (selectedRegions.length > 0) {
      const observables = selectedRegions.map(region => this.apiService.getCountriesByRegion(region));

      forkJoin(observables).subscribe(
        (data: any[]) => {
          this.countries = [].concat(...data);
        },
        (error) => {
          console.error('Error fetching countries by region:', error);
        }
      );
    } else {
      this.countries = [];
    }
  }
}
