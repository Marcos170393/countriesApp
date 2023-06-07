import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import {Region} from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit{

  public countriesList:Country[]=[];
  public initialValue:string = '';

  public isLoading:boolean = false;
  public regions:Region[] =  ['Africa','Americas','Asia','Europe','Oceania'];
  public selectedRegion?:Region;
  constructor(private countriesService:CountriesService){}

  ngOnInit(){
    if(this.countriesService.cacheStore.byRegion.countries != null){
      this.countriesList = this.countriesService.cacheStore.byRegion.countries;
      this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
    }
  }

  searchByRegion(region:Region){

    this.isLoading = true;

    this.countriesService.searchRegion(region).subscribe(countries=>{
      
      this.countriesList = countries;
      this.isLoading = false;
      this.selectedRegion = region;
    })
    
  }
}
