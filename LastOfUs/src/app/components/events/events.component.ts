import { Component, OnInit } from '@angular/core';
import { TMapiService } from 'src/app/services/tmapi.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  events;

  constructor(private tmAPI: TMapiService) {}

  ngOnInit(): void {
    this.tmAPI.getEvents().subscribe((data) => {
      // console.log(data);
      this.events = data['_embedded'].events;
      console.log(this.events);
    });
  }

  getFilterResults(filterResults) {
    this.events = filterResults;
  }
}
