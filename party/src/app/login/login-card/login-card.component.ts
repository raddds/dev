import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
})
export class LoginCardComponent implements OnInit {
  @Output() logInPressed = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onLoginPressed() {
    window.location.href = 'https://accounts.spotify.com/authorize?' +
    'client_id=091f4e7a51b145c9843854c6aa29c317&' +
    'response_type=token&' +
    'redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Froom&' +
    'scope=app-remote-control';
 }
}
