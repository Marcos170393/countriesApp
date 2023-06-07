import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-image',
  templateUrl: './image.component.html',
  styles: [
  ]
})
export class ImageComponent implements OnInit{

  public isLoaded:boolean=false;

  ngOnInit(): void {
  }

  @Input()
  public imageURL!:string;


  onLoaded(){
    this.isLoaded = true;
  }
}
