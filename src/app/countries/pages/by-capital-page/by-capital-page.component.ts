import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent{

  public countriesList:Country[]=[];
  
  constructor(private countriesService:CountriesService){}

  searchByCapital(value:string):void{
    this.countriesService.searchCapital(value).subscribe(
      countries=>{
        this.countriesList = countries;
      }
    );
    
  }
}
