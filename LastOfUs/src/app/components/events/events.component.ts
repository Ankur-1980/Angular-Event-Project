import { Component, OnInit } from '@angular/core';
import { TMapiService } from 'src/app/services/tmapi.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events: any[];
  InItEvent: Subscription;

  constructor(private tmAPI: TMapiService) {
    this.InItEvent = this.tmAPI.getClickEvent().subscribe(() => {
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.tmAPI.getEvents().subscribe((data) => {
      this.events = data['_embedded'].events;
    }).unsubscribe;
  }
  getFilterResults(filterResults) {
    this.events = filterResults;
  }
}
