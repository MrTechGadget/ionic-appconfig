import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

declare var cordova;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  platformOS;
  platformOrientation;
  appconfigSettings;
  key = null;


  constructor(public platform:Platform, public navCtrl: NavController) {
    this.platform.ready().then(() => {
      this.platformOS = this.platform.platforms();
      if (this.platform.isPortrait()) {
        this.platformOrientation = "portrait";
      } else this.platformOrientation = "landscape";
      this.appconfigSettings = this.getValue(this.key);
    });
  }

  getValue(key) {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
      console.log(cordova.plugins.EmmAppConfig.getValue(key));
      this.appconfigSettings = JSON.stringify(cordova.plugins.EmmAppConfig.getValue(key));
      } else this.appconfigSettings = 'AppConfig not available on this device';
    });
  }

}
