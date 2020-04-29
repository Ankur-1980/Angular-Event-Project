import { Component, OnInit } from '@angular/core';
import { BucketListService } from '../../services/bucket-list.service';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css'],
})
export class BucketListComponent implements OnInit {
  //bucketList is an array that is similar to the use of the bucketlistService array
  //It is used to display the choices the user adds from the event-cards into the BucketList
  //Objects will be added and removed from it
  bucketList = [];

  constructor(private bucket: BucketListService) { }

  ngOnInit(): void {
    this.bucketList = this.bucket.getBucketList();
  }
}
