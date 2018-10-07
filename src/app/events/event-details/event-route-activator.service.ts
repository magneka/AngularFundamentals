import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from '../../services/event.service';



@Injectable()
export class EventRouteActivator implements CanActivate {

    constructor(private eventService:EventService,
        private router: Router) { }

    canActivate(route:ActivatedRouteSnapshot) {
       // !! Casts to boolean 
       const eventExists = !!this.eventService.getEvent(+route.params['id'])

       if (!eventExists)
        this.router.navigate(['404'])

       return eventExists
    }
}