import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WikiPage } from '../pages/wiki/wiki';
import { GalleryPage } from '../pages/gallery/gallery';
import { ThumimPage } from '../pages/thumim/thumim';
import { TimesPage } from '../pages/times/times';
@NgModule({
  declarations: [MyApp, HomePage, WikiPage, GalleryPage, ThumimPage, TimesPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WikiPage,
    GalleryPage,
    ThumimPage,
    TimesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
