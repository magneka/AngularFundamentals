import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../shared';

@Component({
  selector: 'event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  
  event:IEvent
  addMode: boolean
  filterBy: string = 'all';

  constructor(
    private eventService:EventService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.forEach((data) => {
      this.event = data['event'];
      // Reset state når parameter endres
      this.addMode = false;
    });
  }

  addSession() {
    this.addMode = true
  }

  saveNewSession(session: ISession) {
    // Get max id
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id))
    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventService.saveEvent(this.event).subscribe();
    this.addMode = false

  }

  cancelAddSession() {
    this.addMode = false;
  }

}
