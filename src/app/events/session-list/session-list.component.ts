import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges {
  
  @Input() sessions: ISession[]
  @Input() filterBy: string;
  visibleSessions: ISession[] = []; 
  
  constructor() { }

  ngOnInit() {
  }
  
  ngOnChanges(): void {
    console.log("ngOnChanges event")
    if (this.sessions) {
      this.filterSessions(this.filterBy);
    }
  }

  filterSessions(filter: string): any {
    console.log("filterSessions: " + filter)
    if (filter.toLocaleLowerCase() === 'all') {
      // Slice(0) kopierer alle radene til et nytt object
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(
        session => { 
          return session.level.toLocaleLowerCase() === filter; 
        }
      )
    }
  }
}
