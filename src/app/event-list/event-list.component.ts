import { Component, OnInit } from '@angular/core';
import { Event } from '../core/models/event.model';
import { Observable } from 'rxjs';
import { EventService } from '../core/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {
  events$: Observable<Event[]>;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.events$ = this.eventService.getEventById();
  }

}
