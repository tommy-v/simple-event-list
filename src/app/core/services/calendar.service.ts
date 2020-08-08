// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Models
import { EventAdapter } from '../models/calendar.model';
import { CalendarEvent } from '../models/calendar.model';

// Utils
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient, private adapter: EventAdapter) { }

  getEventById(): Observable<CalendarEvent[]> {
    const url = environment.apiBaseUrl + `/event/all`;
    let headers = new HttpHeaders();

    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    // return of(mock)
    return this.http.get<CalendarEvent[]>(url, { headers })
    .pipe(
      map((response: any) => response.map(item => this.adapter.adapt(item)))
    );
  }
}
