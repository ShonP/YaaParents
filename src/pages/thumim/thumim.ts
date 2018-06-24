import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from 'ionic-angular';
import { GalleryPage } from '../gallery/gallery';
/**
 * Generated class for the ThumimPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-thumim',
  templateUrl: 'thumim.html'
})
export class ThumimPage {
  handasa = [
    'handasa/handasa1.jpg',
    'handasa/handasa2.jpg',
    'handasa/handasa3.jpg',
    'handasa/handasa4.jpg',
    'handasa/handasa5.jpg',
    'handasa/handasa6.jpg'
  ];
  humarim = [
    'humarim/humarim1.jpg',
    'humarim/humarim2.jpg',
    'humarim/humarim3.jpg',
    'humarim/humarim4.jpg',
    'humarim/humarim5.jpg',
    'humarim/humarim6.jpg',
    'humarim/humarim7.jpg',
    'humarim/humarim8.jpg',
    'humarim/humarim9.jpg'
  ];
  matosim = [
    'matosim/matosim1.jpg',
    'matosim/matosim2.jpg',
    'matosim/matosim3.jpg',
    'matosim/matosim4.jpg',
    'matosim/matosim5.jpg',
    'matosim/matosim6.jpg',
    'matosim/matosim7.jpg',
    'matosim/matosim8.jpg',
    'matosim/matosim9.jpg',
    'matosim/matosim10.jpg'
  ];
  shapizim = [
    'shapizim/shapizim1.jpg',
    'shapizim/shapizim2.jpg',
    'shapizim/shapizim3.jpg',
    'shapizim/shapizim4.jpg',
    'shapizim/shapizim5.jpg',
    'shapizim/shapizim6.jpg',
    'shapizim/shapizim7.jpg',
    'shapizim/shapizim8.jpg',
    'shapizim/shapizim9.jpg',
    'shapizim/shapizim10.jpg'
  ];
  tapi = [
    'tapi/tapi1.jpg',
    'tapi/tapi2.jpg',
    'tapi/tapi3.jpg',
    'tapi/tapi4.jpg',
    'tapi/tapi5.jpg',
    'tapi/tapi6.jpg',
    'tapi/tapi7.jpg',
    'tapi/tapi8.jpg'
  ];
  constructor(
    private _modalCtr: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}
  openTapi() {
    this.navCtrl.push(GalleryPage, {
      images: this.tapi,
      name: 'תחום תכנון פיקוח ייצור'
    });
  }
  openHandasa() {
    this.navCtrl.push(GalleryPage, {
      images: this.handasa,
      name: 'תחום הנדסה'
    });
  }
  openHumarim() {
    this.navCtrl.push(GalleryPage, {
      images: this.humarim,
      name: 'תחום חומרים'
    });
  }
  openShapizim() {
    this.navCtrl.push(GalleryPage, {
      images: this.shapizim,
      name: 'תחום שפיצים'
    });
  }
  openMatosim() {
    this.navCtrl.push(GalleryPage, {
      images: this.matosim,
      name: 'תחום מטוסים'
    });
  }
}
