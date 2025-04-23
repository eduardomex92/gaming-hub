import { Component } from '@angular/core';

@Component({
  selector: 'app-platform',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class PlatformPage {
  loading: boolean = true;

  constructor() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
