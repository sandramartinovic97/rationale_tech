import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionsComponent } from './actions/actions.component';
import { ItemsComponent } from './items/items.component';
import { MeetingComponent } from './meeting/meeting.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'meeting', component: MeetingComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'actions', component: ActionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
