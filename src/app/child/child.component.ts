import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() child="HI";
  @Output() newchildEvent= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  addNewchild(value:string){
    this.newchildEvent.emit(value);
  }

}
