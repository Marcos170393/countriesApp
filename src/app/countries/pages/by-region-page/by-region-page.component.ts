import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countriesList:Country[]=[];
  public isLoading:boolean = false;
  public regions:Region[] =  ['Africa','Americas','Asia','Europe','Oceania'];
  public selectedRegion?:Region;
  constructor(private countriesService:CountriesService){}

  searchByRegion(region:Region){

    this.isLoading = true;

    this.countriesService.searchRegion(region).subscribe(countries=>{
      
      this.countriesList = countries;
      this.isLoading = false;
      this.selectedRegion = region;
    })
    
  }
}
