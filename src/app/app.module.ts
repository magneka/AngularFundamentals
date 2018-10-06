import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
//import { ToastrService } from './services/toastr.service';
//import { EventService } from './services/event.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  //providers: [EventService, ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
