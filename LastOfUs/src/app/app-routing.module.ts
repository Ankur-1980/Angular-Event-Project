import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './components/events/events.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: '', component: EventsComponent },

  { path: 'details/:eventId', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
