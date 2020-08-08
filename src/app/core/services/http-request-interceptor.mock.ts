// Angular
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

// Models
import { Event } from '../models/event.model';

// Utils
import { Observable, of } from 'rxjs';
import mockEvents from '../../../test/mocks/events.mock';

@Injectable()
export class HttpRequestInterceptorMock implements HttpInterceptor {
    constructor(private injector: Injector) { }

    intercept(request: HttpRequest<Event[]>, next: HttpHandler):
        Observable<HttpEvent<Event[]>> {
        if (request.url && request.url
            .indexOf(`http://localhost:5000/event/all`) > -1) {
            return of(new HttpResponse({ status: 200, body: mockEvents }));
        }

        return next.handle(request);
    }
}
