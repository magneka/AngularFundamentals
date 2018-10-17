import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../user/auth.service';
import { ISession, EventService } from '../../events/shared';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  searchTerm: string = "";
  foundSessions: ISession[];

  constructor(
    private auth: AuthService,
    private eventService: EventService) { }

  ngOnInit() {
  }

  searchSessions (searchTerm: string) {
    this.eventService.searchSessions(searchTerm)
      .subscribe(
        sessions => {this.foundSessions = sessions;
        console.log(this.foundSessions);
    });    
  }

}
