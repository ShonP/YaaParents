import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WikiPage } from '../wiki/wiki';
import { ThumimPage } from '../thumim/thumim';
import { TimesPage } from '../times/times';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  wikiPage = WikiPage;
  thumimPage = ThumimPage;
  timesPage = TimesPage;
  constructor(public navCtrl: NavController) {}
}
