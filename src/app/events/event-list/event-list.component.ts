import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ToastrService } from '../../services/toastr.service';

@Component({
  selector: 'events-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events:any[]

  constructor(
    private eventService: EventService,
    private toastr: ToastrService
    ) {}

  ngOnInit() {
    this.events = this.eventService.getEvents()
  }

  handleThumbnailClickEvent(eventName) {
    this.toastr.success(eventName)
  }
}