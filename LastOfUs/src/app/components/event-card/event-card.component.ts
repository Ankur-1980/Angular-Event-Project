import { Component, OnInit, Input } from '@angular/core';
import { BucketListService } from '../../services/bucket-list.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css'],
})
export class EventCardComponent implements OnInit {
  @Input() event;

  constructor(private bucket: BucketListService) {}

  ngOnInit(): void {}

  addToList() {
    this.bucket.addToBucketList(this.event);
  }

  removeFromList() {
    this.bucket.removeFromBucketList(this.event);
  }
}