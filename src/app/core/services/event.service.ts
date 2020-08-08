// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Models
import { EventAdapter } from '../models/event.model';
import { Event } from '../models/event.model';

// Utils
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient, private adapter: EventAdapter) { }

  getEventById(): Observable<Event[]> {
    const url = environment.apiBaseUrl + `/event/all`;
    let headers = new HttpHeaders();

    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.http.get<Event[]>(url, { headers })
    .pipe(
      map((response: any) => response.map(item => this.adapter.adapt(item)))
    );
  }
}
