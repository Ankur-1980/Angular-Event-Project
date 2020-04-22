import { Component, OnInit } from '@angular/core';
import { TMapiService } from '../../services/tmapi.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {
  searchTerms = new Subject<string>();
  events;

  constructor(private api: TMapiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.api.search(this.searchTerms).subscribe((data) => {
      this.events = data;
    })
  }

  getEvents() {
    return this.api.getEvents();
  }
}
