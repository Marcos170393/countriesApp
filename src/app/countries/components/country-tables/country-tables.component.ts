import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-table',
  templateUrl: './country-tables.component.html',
  styles: [
  ]
})
export class CountryTablesComponent {

  @Input()
  public countries:Country[]=[];
}
