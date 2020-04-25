import { Component, OnInit } from '@angular/core';
import { TMapiService } from 'src/app/services/tmapi.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events: any[];

  constructor(private tmAPI: TMapiService) {}

  ngOnInit(): void {
    this.tmAPI
      .getEvents()
      .subscribe((data) => {
        this.events = data['_embedded'].events;
      })
      .unsubscribe();
  }

  getFilterResults(filterResults) {
    console.log(`Filter Result: ${this.events}`);

    this.events = filterResults;
  }
}
