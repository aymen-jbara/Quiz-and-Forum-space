import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-start-opinion',
  templateUrl: './start-opinion.component.html',
  styleUrls: ['./start-opinion.component.css']
})
export class StartOpinionComponent implements OnInit {

  constructor() { }
  starClassName = "star-rating-blank";
  @Input() starId:any;
  @Input() rating:any;

  @Output() leave: EventEmitter<number> = new EventEmitter();
  @Output() enter: EventEmitter<number> = new EventEmitter();
  @Output() bigClick: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    console.log(this.starId);
    console.log(this.rating);

    if (this.rating >= this.starId) {
      this.starClassName = "star-rating-filled";
    }
  }

  onenter() {
    this.enter.emit(this.starId);
  }

  onleave() {
    this.leave.emit(this.starId);
  }

  starClicked() {
    this.bigClick.emit(this.starId);
  }
}
