import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BucketListService {
  bucketList = [];

  constructor() {}

  addToBucketList(event) {
    this.bucketList.push(event);
    return this.bucketList;
  }

  removeFromBucketList(event) {
    let index = this.bucketList.findIndex((b) => b.id === event.id);
    this.bucketList.splice(index, 1);
    return this.bucketList;
  }

  getBucketList() {
    return this.bucketList;
  }

  containsEvent(event): boolean {
    return this.bucketList.includes(event);
  }
}
