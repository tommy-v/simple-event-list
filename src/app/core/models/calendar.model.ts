import { Injectable } from '@angular/core';
import { Adapter } from '../adapter';

export class CalendarEvent {
    constructor(
        public title: string,
        public descriptionShort: string,
        public images: Image[],
        public startDatetime: Date,
    ) { }
}

export class Image {
    constructor(
        public thumbnail: ImageInfo,
        public small: ImageInfo,
        public medium: ImageInfo,
        public full: ImageInfo
    ) {
    }
}

export class ImageInfo {
    constructor(
        public width: number,
        public url: string,
        public height: number
    ) {
    }
}

@Injectable({
    providedIn: 'root'
})
export class EventAdapter implements Adapter<CalendarEvent> {
    adapt(item: any): CalendarEvent {
        return new CalendarEvent(
            item.title,
            item.description_short,
            item.images.map(image => new Image(
                new ImageInfo(
                    image.thumbnail.width,
                    image.thumbnail.url,
                    image.thumbnail.height
                ),
                new ImageInfo(
                    image.small.width,
                    image.small.url,
                    image.small.height
                ),
                new ImageInfo(
                    image.medium.width,
                    image.medium.url,
                    image.medium.height
                ),
                new ImageInfo(
                    image.full.width,
                    image.full.url,
                    image.full.height
                )
            )),
            item.start_datetime
        );
     }
}
