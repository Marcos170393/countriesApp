import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Output() searchEvent = new EventEmitter<string>();


  @Input()
  public placeholder:string='';

  onSearch(value:string){
    this.searchEvent.emit(value);
  }


}
