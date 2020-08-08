import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';

export class Event {
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
export class EventAdapter implements Adapter<Event> {
    adapt(item: any): Event {
        return new Event(
            item.title,
            item.shortDescription,
            item.imageUrl,
            item.startDatetime,
        );
    }
}
