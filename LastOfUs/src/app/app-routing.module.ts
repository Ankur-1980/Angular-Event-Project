import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { DetailsComponent } from './components/details/details.component';
import { BucketListComponent } from './components/bucket-list/bucket-list.component';

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'details/:eventID', component: DetailsComponent },
  { path: 'bucket-list', component: BucketListComponent },
];

  { path: 'details/:eventId', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
