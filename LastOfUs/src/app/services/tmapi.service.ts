import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TMapiService {
  events = 'events';
  classifications = 'classifications';

  baseUrl = 'https://app.ticketmaster.com/discovery/v2/';
  API_KEY = '.json?apikey=zMf7gfbAyAigJLCB0a1iMrDv6OK8IDz9';
  global = '&locale=*';

  private subject = new Subject<any>();

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get(
      `${this.baseUrl}${this.events}${this.API_KEY}${this.global}`
    );
  }

  getClassifications() {
    return this.http.get(
      `${this.baseUrl}${this.classifications}${this.API_KEY}${this.global}`
    );
  }

  getDetails(eventID) {
    return this.http.get(
      `${this.baseUrl}${this.events}/${eventID}${this.API_KEY}${this.global}`
    );
  }

  keyWordsSearch(searchTerm): any {
    return this.http.get(
      `${this.baseUrl}${this.events}${this.API_KEY}&keyword=${searchTerm}`
    );
  }

  filterSearch({
    searchBar,
    categoryID,
    genreID,
    stateID,
    countryID,
    numberOfPosts,
  }): any {
    return this.http.get(
      `${this.baseUrl}${this.events}${this.API_KEY}&keyword=${searchBar}${this.global}&size=${numberOfPosts}&countryCode=${countryID}&stateCode=${stateID}&segmentId=${categoryID}&genreId=${genreID}`
    );
  }

  sendClickEvent() {
    this.subject.next();
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}

// app.ticketmaster.com/discovery/v2/
// events.json?
// apikey=zMf7gfbAyAigJLCB0a1iMrDv6OK8IDz9&keyword=undefined&locale=*&size=&countryCode=HI&stateCode=25&segmentId=&genreId=
