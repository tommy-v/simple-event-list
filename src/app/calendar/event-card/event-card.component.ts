import { Component, OnInit, Input } from '@angular/core';
import { CalendarEvent } from 'src/app/core/models/calendar.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input() event: CalendarEvent;

  constructor() {}

  ngOnInit(): void {
  }

}
