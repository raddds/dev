import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../service/spotify.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {}

  onPlay(event) {
    this.spotifyService.play();
  }
}
