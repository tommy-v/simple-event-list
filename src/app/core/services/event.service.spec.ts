// Angular
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Utils
import mockEvents from '../../../test/mocks/events.mock';

// Models
import { Event } from '../models/event.model';

// Services
import { EventService } from './event.service';

describe('EventService', () => {
  let httpTestingController: HttpTestingController;
  let service: EventService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventService],
      imports: [
        HttpClientTestingModule,
      ],
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(EventService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should should get events events', () => {
    service.getEventById().subscribe((events: Event[]) => {
      expect(events).not.toBe(null);
      expect(JSON.stringify(events)).toEqual(JSON.stringify(mockEvents));
    });

    const req = httpTestingController
      .expectOne(`http://localhost:5000/event/all`);

    req.flush(mockEvents);
  });
});
