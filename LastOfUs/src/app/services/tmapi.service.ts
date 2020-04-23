import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TMapiService {
  events = 'events';
  classifications = 'classifications';

  baseUrl = 'https://app.ticketmaster.com/discovery/v2/';
  API_KEY = '.json?apikey=zMf7gfbAyAigJLCB0a1iMrDv6OK8IDz9';
  global = '&locale=*';

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
    return `${this.baseUrl}${this.events}${this.API_KEY}&keyword=${searchTerm}`;
  }
}
