import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared';

@Component({
    selector: 'create-event',
    templateUrl: 'create-event.component.html',
    styleUrls: ['create-event.component.css']
})

export class CreateEventComponent implements OnInit {
    newEvent
    isDirty:Boolean = true

    constructor(
        private router: Router,
        private eventService: EventService
    ) { }

    ngOnInit() { }

    saveEvent(formValues) {        
        console.log(formValues)
        this.eventService.saveEvent(formValues).subscribe(() => {
            this.isDirty = false;
            this.router.navigate(['/events'])
        });
    }

    cancel() {
        this.router.navigate(['/events'])
    }
}