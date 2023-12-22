import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { RegionComponent } from './region/region.component';
import { AutreComponent } from './autre/autre.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CountriesListComponent,
    CountryDetailComponent,
    RegionComponent,
    AutreComponent,
<<<<<<< HEAD
    HeaderComponent,
=======
>>>>>>> b1f5fcb688be152628f344dc2cfbc6119fa44c5b
    FooterComponent
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
