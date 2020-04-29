import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BucketListService {
  bucketList = [];

  constructor() { }

  addToBucketList(event) {
    //A method used to push new events to the bucketlist[], and then return the [] with its updated items
    this.bucketList.push(event);
    console.log(this.bucketList);

    return this.bucketList;
  }

  removeFromBucketList(event) {
    //this method is unique as in our IDs are individual, so it will only find the first ID = to the event
    //and then pass that into splice.
    let index = this.bucketList.findIndex((b) => b.id === event.id);
    this.bucketList.splice(index, 1);
    return this.bucketList;
  }

  getBucketList() {
    //this method is used to display the bucketlist that the user has created from the add & delete functions on the event-cards
    return this.bucketList;
  }

  containsEvent(event): boolean {
    return this.bucketList.includes(event);
  }
}
