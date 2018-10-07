import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/Error404/Error404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';


const routes:Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventListComponent },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full'}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ], 
  declarations: []
})
export class RoutesModule {}


