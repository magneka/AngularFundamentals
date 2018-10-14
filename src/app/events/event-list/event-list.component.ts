import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';

@Component({
  //selector: 'events-list', Trenger ikke pga routing
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events:IEvent[]

  constructor(
    private eventService: EventService,   
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    //this.eventService.getEvents().subscribe(events => { this.events = events})
    this.events = this.route.snapshot.data['events']
  }
}