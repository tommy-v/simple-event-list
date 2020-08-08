// Angular
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Modules
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

// Utils
import { HttpRequestInterceptorMock } from './core/services/http-request-interceptor.mock';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptorMock,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
