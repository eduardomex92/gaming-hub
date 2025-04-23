import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatformService } from '../services/platforms.service';

@Component({
  selector: 'app-platform-details',
  templateUrl: './platform-details.page.html',
  styleUrls: ['./platform-details.page.scss'],
})
export class PlatformDetailsPage implements OnInit {
  platformName: string = '';
  games: any[] = [];
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private platformService: PlatformService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.platformName = params.get('platform') || '';
      this.platformService.getGamesByPlatform(this.platformName).subscribe((games) => {
        this.games = games;
        this.loading = false;
      });
    });
  }
}
