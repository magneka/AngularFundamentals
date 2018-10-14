import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { EventsListResolver } from './services/events-list-resolver.service';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { Error404Component } from './errors/Error404/Error404.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';
import { CreateSessionComponent } from './events/create-session/create-session.component';
import { SessionListComponent } from './events/session-list/session-list.component';
//import { ToastrService } from './services/toastr.service';
//import { EventService } from './services/event.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    NavBarComponent,
    EventDetailsComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
  ],
  //providers: [EventService, ToastrService],
  providers: [
    AuthService,
    EventRouteActivator,
    EventsListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState (component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true;
}
