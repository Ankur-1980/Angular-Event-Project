import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsComponent } from './components/events/events.component';
import { DetailsComponent } from './components/details/details.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BucketListComponent } from './components/bucket-list/bucket-list.component';

@NgModule({
  declarations: [AppComponent, EventsComponent, DetailsComponent, EventCardComponent, BucketListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
