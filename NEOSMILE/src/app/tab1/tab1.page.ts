import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from '../image-modal/image-modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  sliderOptions = {
    zoon: false,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 20
  };
  constructor(private modalController: ModalController) {}

  openPreview(myImage){
    this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        img: myImage,
      },
    }).then(modal => modal.present());
  }
}
