// Angular imports
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Utils
import { HttpRequestInterceptorMock } from '../core/services/http-request-interceptor.mock';
import mockEvents from '../../test/mocks/events.mock';

// Components
import { CalendarComponent } from './calendar.component';
import { CalendarEvent } from '../core/models/calendar.model';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarComponent],
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
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render events', async () => {
    const renderEvents: CalendarEvent[] =
      fixture.debugElement.nativeElement.querySelectorAll('.ph10');

    expect(renderEvents).not.toBe(null);
    expect(renderEvents.length).toBe(mockEvents.length);
  });
});
