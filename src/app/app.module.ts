import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RoutesModule } from './routes.module';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/Error404/Error404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';
import { EventsListResolver } from './services/events-list-resolver.service';
import { ProfileComponent } from './user/profile/profile.component';
//import { ToastrService } from './services/toastr.service';
//import { EventService } from './services/event.service';

@NgModule({
  imports: [
    BrowserModule,
    RoutesModule
  ],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    NavBarComponent,
    EventDetailsComponent,
    Error404Component,
    ProfileComponent
  ],
  //providers: [EventService, ToastrService],
  providers: [
    EventsListResolver,
    EventRouteActivator,
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
