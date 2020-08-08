// Angular imports
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Utils
import { HttpRequestInterceptorMock } from '../core/services/http-request-interceptor.mock';
import mockEvents from '../../test/mocks/events.mock';

// Components
import { EventListComponent } from './event-list.component';
import { Event } from '../core/models/event.model';

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventListComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpRequestInterceptorMock,
          multi: true
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render events', async () => {
    const renderEvents: Event[] =
      fixture.debugElement.nativeElement.querySelectorAll('.ph10');

    expect(renderEvents).not.toBe(null);
    expect(renderEvents.length).toBe(mockEvents.length);
  });
});
