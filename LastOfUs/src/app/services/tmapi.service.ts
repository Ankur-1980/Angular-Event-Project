import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TMapiService {
  //apiCalls is used to track how many times we actually call the api
  apiCalls = 0;

  events = 'events';
  classifications = 'classifications';

  baseUrl = 'https://app.ticketmaster.com/discovery/v2/';
  API_KEY = '.json?apikey=zMf7gfbAyAigJLCB0a1iMrDv6OK8IDz9';
  global = '&locale=*';

  private subject = new Subject<any>();

  constructor(private http: HttpClient) { }

  getEvents() {
    this.apiCalls++;
    console.log(this.apiCalls);

    return this.http.get(
      `${this.baseUrl}${this.events}${this.API_KEY}${this.global}`
    );
  }
  //Classifications are used to call a genre/category
  getClassifications() {
    this.apiCalls++;
    console.log(this.apiCalls);

    return this.http.get(
      `${this.baseUrl}${this.classifications}${this.API_KEY}${this.global}`
    );
  }

  getDetails(eventID) {
    this.apiCalls++;
    console.log(this.apiCalls);

    return this.http.get(
      `${this.baseUrl}${this.events}/${eventID}${this.API_KEY}${this.global}`
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
    this.apiCalls++;
    console.log(this.apiCalls);

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
