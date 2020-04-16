import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TMapiService {
  baseUrl = 'https://app.ticketmaster.com/discovery/v2/events';
  API_KEY = '.json?apikey=zMf7gfbAyAigJLCB0a1iMrDv6OK8IDz9';

  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get(`${this.baseUrl}${this.API_KEY}`);
  }
}
