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
  public isLoading:boolean = false;

  constructor(private countriesService:CountriesService){}

  searchByCapital(value:string):void{
    this.isLoading = true;
    this.countriesService.searchCapital(value).subscribe(
      countries=>{
        this.countriesList = countries;
        this.isLoading = false;
      }
    );
    
  }
}
