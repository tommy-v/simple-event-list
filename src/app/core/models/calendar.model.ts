import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';

export class CalendarEvent {
    constructor(
        public title: string,
        public shortDescription: string,
        public imageUrl: string,
        public startDatetime: Date,
    ) { }
}

@Injectable({
    providedIn: 'root'
})
export class EventAdapter implements Adapter<CalendarEvent> {
    adapt(item: any): CalendarEvent {
        return new CalendarEvent(
            item.title,
            item.shortDescription,
            item.imageUrl,
            item.startDatetime,
        );
    }
}
