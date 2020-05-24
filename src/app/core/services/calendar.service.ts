import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventAdapter } from '../models/calendar.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CalendarEvent } from '../models/calendar.model';
import { of } from 'rxjs';

import mock from './mocks/eventsMock';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient, private adapter: EventAdapter) { }

  getEventById(): Observable<CalendarEvent[]> {
    const url = environment.apiBaseUrl + `/calendars/4243455/events`;
    let headers = new HttpHeaders();

    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    // return this.http.get<CalendarEvent[]>(url, { headers })
    return of(mock)
    .pipe(
      map((response: any) => response.data.items.map(item => this.adapter.adapt(item)))
    );
  }
}
