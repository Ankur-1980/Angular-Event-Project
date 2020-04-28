import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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

  newGettingClassifications(): any {
    return this.http
      .get(
        `${this.baseUrl}${this.classifications}${this.API_KEY}${this.global}`
      )
      .pipe(
        map((allEventObjects) => {
          const segments = allEventObjects['_embedded'].classifications.filter(
            (x) => x.segment
          );
          return segments;
        })
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
}
// app.ticketmaster.com/discovery/v2/
// events.json?
// apikey=zMf7gfbAyAigJLCB0a1iMrDv6OK8IDz9&keyword=undefined&locale=*&size=&countryCode=HI&stateCode=25&segmentId=&genreId=
