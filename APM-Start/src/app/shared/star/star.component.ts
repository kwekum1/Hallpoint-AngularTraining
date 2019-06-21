import { Component, OnInit, OnChanges, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
 
 
  ngOnChanges(): void {
   this.starWidth = this.rating * 75 / 5;
  }

@Input() rating: number;
starWidth: number;
@Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>(); 

onClick() {
  this.ratingClicked.emit(`The rating is ${this.rating} was clicked!`);
}


  constructor() { }

  ngOnInit() {
  }

}
