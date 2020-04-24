import { Component, OnInit } from '@angular/core';
import { TMapiService } from '../../services/tmapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  details;
  eventID;

  constructor(private api: TMapiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.eventID = this.route.snapshot.params.eventID;

    this.api.getDetails(this.eventID).subscribe((data) => {
      this.details = data;
    });
  }
}
