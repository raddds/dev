import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggingInComponent } from './logging-in/logging-in.component';
import { LoginComponent } from './login/login.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logging-in', component: LoggingInComponent },
  { path: 'room', component: RoomComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
