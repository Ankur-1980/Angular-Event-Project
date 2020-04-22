import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable({
  providedIn: 'root',
})
export class TMapiService {
  baseUrl = 'https://app.ticketmaster.com/discovery/v2/events';
  API_KEY = '.json?apikey=zMf7gfbAyAigJLCB0a1iMrDv6OK8IDz9';
  url = `${this.baseUrl}${this.API_KEY}`;

  constructor(private http: HttpClient) { }

  getEvents() {
    return this.http.get(this.url);
  }

  getDetails(eventID) {
    return this.http.get(`${this.baseUrl}/${eventID}${this.API_KEY}`);
  }

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.http.get(this.API_KEY);
  }
}
