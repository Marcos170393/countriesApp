import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countriesList:Country[]=[];
  public isLoading:boolean = false;
  constructor(private countryService:CountriesService){}

  searchByCountry(value:string){
    this.isLoading = true;
    this.countryService.searchCountry(value).subscribe(countries=>{
      this.countriesList = countries;
      this.isLoading = false;
    })
    
  }
}
