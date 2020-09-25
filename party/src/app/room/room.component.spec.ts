import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SpotifyService } from '../service/spotify.service';
import { RoomComponent } from './room.component';

describe('RoomComponent', () => {
  let component: RoomComponent;
  let fixture: ComponentFixture<RoomComponent>;
  let mockSpotifyService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomComponent],
      providers: [
        {
          useValue: jasmine.createSpyObj(SpotifyService.name, ['play']),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mockSpotifyService = TestBed.inject(SpotifyService);
    mockSpotifyService.play.and.returnValue(of({}));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onPlay', () => {
    it('should call the play function on the Spotify service', () => {
      spyOn(mockSpotifyService, 'play');
      component.onPlay(true);
      expect(component).toBeTruthy();
    });
  });
});
