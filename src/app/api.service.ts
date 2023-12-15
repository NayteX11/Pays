import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ApiResponse {
  total_count: number;
  results: any[];
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://data.gouv.nc/api/explore/v2.1/catalog/datasets/liste-des-pays-et-territoires-etrangers/records?limit=30';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiUrl);
  }

  getCountryDetails(countryId: string): Observable<any> {
    return this.http.get<ApiResponse>(this.apiUrl).pipe(
      map(response => {
        const country = response.results.find(c => c.codeiso3 === countryId);
        return country || null;
      })
    );
  }
}
