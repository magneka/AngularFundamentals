import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RoutesModule } from './routes.module';
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
    NavBarComponent,
    EventDetailsComponent
  ],
  //providers: [EventService, ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
