import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class HomePage {
  loading: boolean = true;
  constructor() {
    this.simulateLoading();
  }

  async simulateLoading() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    this.loading = false;
  }
}
