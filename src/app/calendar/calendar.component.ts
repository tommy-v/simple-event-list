import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from '../core/models/calendar.model';
import { Observable } from 'rxjs';
import { CalendarService } from '../../app/core/services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  events$: Observable<CalendarEvent[]>;

  constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
    this.events$ = this.calendarService.getEventById();
  }

}
