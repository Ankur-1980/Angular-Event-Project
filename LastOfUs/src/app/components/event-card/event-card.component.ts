import { Component, OnInit, Input } from '@angular/core';
import { BucketListService } from '../../services/bucket-list.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
})
export class EventCardComponent implements OnInit {
  @Input() event;

  constructor(public bucket: BucketListService) {}

  ngOnInit(): void {}

  toggleAddRemove() {
    if (this.bucket.containsEvent(this.event)) {
      this.bucket.removeFromBucketList(this.event);
    } else {
      this.bucket.addToBucketList(this.event);
    }
  }
}
