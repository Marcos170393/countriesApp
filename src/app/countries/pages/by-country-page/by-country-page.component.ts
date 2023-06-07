import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit{

  public countriesList:Country[]=[];
  public initialValue:string='';

  public isLoading:boolean = false;
  
  constructor(private countryService:CountriesService){}

  ngOnInit(): void {
    if(this.countryService.cacheStore.byCountry.countries){
      this.countriesList = this.countryService.cacheStore.byCountry.countries;  
      this.initialValue = this.countryService.cacheStore.byCountry.term;  
    }
  }

  searchByCountry(value:string){
    this.isLoading = true;
    this.countryService.searchCountry(value).subscribe(countries=>{
      this.countriesList = countries;
      this.isLoading = false;
    })
    
  }
}
