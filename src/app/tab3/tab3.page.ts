import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-contact',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class ContactPage {
  imageUrl: string = '';
  loading: boolean = true; // Added loading state

  constructor() {
    // Simulate loading for demo purposes
    setTimeout(() => {
      this.loading = false; // Set loading to false after data "loads"
    }, 2000);
  }

  async captureImage() {
    try {
      const image = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 100,
      });

      this.imageUrl = image.webPath || '';
    } catch (error) {
      console.error('Error capturing image', error);
    }
  }
}
