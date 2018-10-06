import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() 
  event:any

  constructor() { }

  ngOnInit() {
  } 

  getStartTimeClass() {
    /*

    Variant 1
    const isEarlyStart = this.event && this.event.time === '8:00 am' 
    return {green: isEarlyStart, bold: isEarlyStart}

    Variant2
    if (this.event && this.event.time === '8:00 am')
      return 'green bold'
    return ''
    
    Eller Variant3:
    */

    if (this.event && this.event.time === '8:00 am')
      return ['green', 'bold']
    return []
  }
}
