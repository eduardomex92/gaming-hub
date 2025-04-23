import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatformService } from '../services/platforms.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.page.html',
  styleUrls: ['./game-details.page.scss'],
})
export class GameDetailsPage implements OnInit {
  game: any;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private platformsService: PlatformService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const gameId = params.get('gameId');
      console.log('Game ID from URL:', gameId);
      if (gameId) {
        this.platformsService.getGameDetails(gameId).subscribe(
          (game) => {
            console.log('Fetched game details:', game);
            this.game = game;
            this.loading = false; // Set loading to false after data is fetched
          },
          (error) => {
            console.error('Error fetching game details:', error);
            this.loading = false; // Handle error but still hide skeleton
          }
        );
      }
    });
  }



  shareGame() {
    if (navigator.share) {
      navigator
        .share({
          title: this.game?.name || 'Game',
          text: this.game?.description || 'Check out this game!',
          url: window.location.href,
        })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      console.log('Web Share API is not supported on this browser.');
    }
  }
}
