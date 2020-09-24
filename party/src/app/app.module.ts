import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginComponent } from "./login/login.component";
import { LoginCardComponent } from "./login/login-card/login-card.component";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { SpotifyService } from "./service/spotify.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, LoginComponent, LoginCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
