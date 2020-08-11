// MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // for directives
import { FormsModule } from '@angular/forms'; // for two-way binding
import { AppRoutingModule } from './app-routing.module';

// COMPONENTS
import { AdminHeaderComponent } from './admin-header/admin-header.component'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListItemComponent } from './list-item/list-item.component';
import { TrainingTrackerComponent } from './training-tracker/training-tracker.component'
import { TrainingLogComponent } from './training-log/training-log.component';
import { TrainingComponent } from './training/training.component';
import { TimerComponent } from './timer/timer.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AdminHeaderComponent,
    AppComponent,
    HomeComponent,
    ListItemComponent,
    TrainingTrackerComponent,
    TrainingComponent,
    TrainingLogComponent,
    TimerComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
