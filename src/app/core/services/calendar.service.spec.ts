// Angular
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Utils
import mockEvents from '../../../test/mocks/events.mock';

// Models
import { CalendarEvent } from '../models/calendar.model';

// Services
import { CalendarService } from './calendar.service';

describe('CalendarService', () => {
  let httpTestingController: HttpTestingController;
  let service: CalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarService],
      imports: [
        HttpClientTestingModule,
      ],
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(CalendarService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should should get calendar events', () => {
    service.getEventById().subscribe((events: CalendarEvent[]) => {
      expect(events).not.toBe(null);
      expect(JSON.stringify(events)).toEqual(JSON.stringify(mockEvents));
    });

    const req = httpTestingController
      .expectOne(`http://localhost:5000/event/all`);

    req.flush(mockEvents);
  });
});
