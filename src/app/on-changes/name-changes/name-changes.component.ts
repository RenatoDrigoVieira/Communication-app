import { Component, OnInit, Input, SimpleChange, OnChanges } from '@angular/core';

@Component({
  selector: 'app-name-changes',
  templateUrl: './name-changes.component.html',
  styleUrls: ['./name-changes.component.css']
})
export class NameChangesComponent implements OnInit, OnChanges {

  @Input() name:string;
  namebefore:string
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: {[propKey: string]: SimpleChange}){
    if(changes.hasOwnProperty('name')){
      this.namebefore =changes['name'].previousValue;
    }
  }

}
