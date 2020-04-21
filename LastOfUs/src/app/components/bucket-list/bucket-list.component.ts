import { Component, OnInit } from '@angular/core';
import { BucketListService } from '../../services/bucket-list.service';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css'],
})
export class BucketListComponent implements OnInit {
  bucketList = [];

  constructor(private bucket: BucketListService) {}

  ngOnInit(): void {
    this.bucketList = this.bucket.getBucketList();
  }
}
