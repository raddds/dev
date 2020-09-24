import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../service/spotify.service';

@Component({
  selector: 'app-logging-in',
  templateUrl: './logging-in.component.html',
  styleUrls: ['./logging-in.component.scss'],
})
export class LoggingInComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private service: SpotifyService, private route: Router) {}

  ngOnInit(): void {
    const fragment = this.activatedRoute.snapshot.fragment;
    const accessToken = new URLSearchParams(fragment).get('access_token');
    this.service.saveAccessToken(accessToken);
    this.route.navigate(['room']);
  }
}
