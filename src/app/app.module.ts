import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegionComponent } from './region/region.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CountriesListComponent,
    CountryDetailComponent,
    RegionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
