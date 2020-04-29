import { Component, OnInit, Input } from '@angular/core';
import { BucketListService } from '../../services/bucket-list.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
})
export class EventCardComponent implements OnInit {
  //Input is importing the "events" from the Event component. This helps the event display the events on the cards
  @Input() event;

  //The bucketlistService is imported here to help add functionality to the buttons on the cards
  constructor(public bucket: BucketListService) { }

  ngOnInit(): void { }

  toggleAddRemove() {
    if (this.bucket.containsEvent(this.event)) {
      //The add event button called from the bucketlistService
      this.bucket.removeFromBucketList(this.event);
    } else {
      //The delete event button called from the bucketlistService
      this.bucket.addToBucketList(this.event);
    }
  }
}
