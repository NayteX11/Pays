import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { RegionComponent } from './region/region.component';
import { AutreComponent } from './autre/autre.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'countries-list', component: CountriesListComponent },
  { path: 'country/:id', component: CountryDetailComponent },
  { path: 'region', component: RegionComponent },
  { path: 'autre', component: AutreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
