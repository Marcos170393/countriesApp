import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countriesList:Country[]=[];

  constructor(private countriesService:CountriesService){}

  searchByRegion(value:string){
    this.countriesService.searchRegion(value).subscribe(countries=>{
      this.countriesList = countries;
    })
    
  }
}
