import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { EventCardComponent } from './event-card/event-card.component';

import { NgxMasonryModule } from 'ngx-masonry';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CalendarComponent, EventCardComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    NgxMasonryModule,
    SharedModule
  ]
})
export class CalendarModule { }
