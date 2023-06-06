import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent implements OnInit,OnDestroy {

  private debouncer:Subject<string>= new Subject<string>();

  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(1000)
    )
    .subscribe(value=>{
      this.search(value);
    })
  }
  ngOnDestroy(): void {
    this.debouncer.unsubscribe();
  }

  @Output() searchEvent = new EventEmitter<string>();

  @Input()
  public placeholder:string='';
  
  onKeyPress(q:string):void{
    this.debouncer.next(q);
  }
  search(value:string){
    this.searchEvent.emit(value);
  }



}
