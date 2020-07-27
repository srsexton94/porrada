import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TrainingComponent } from './training/training.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'timer', component: TimerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
