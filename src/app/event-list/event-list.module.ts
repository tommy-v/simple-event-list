import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventListRoutingModule } from './event-list-routing.module';
import { EventListComponent } from './event-list.component';
import { EventCardComponent } from './event-card/event-card.component';

import { NgxMasonryModule } from 'ngx-masonry';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EventListComponent, EventCardComponent],
  imports: [
    CommonModule,
    EventListRoutingModule,
    NgxMasonryModule,
    SharedModule
  ]
})
export class EventListModule { }
