import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BucketListService {
  bucketList = [];

  constructor() {}

  addToBucketList(event) {
    this.bucketList.push(event);
    console.log(this.bucketList);

    return this.bucketList;
  }

  removeFromBucketList(event) {
    this.bucketList = this.bucketList.filter((b) => b.id !== event.id);
    console.log(this.bucketList);
    return this.bucketList;
  }

  getBucketList() {
    return this.bucketList;
  }
}
