import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  platformOS;
  platformOrientation;


  constructor(public platform:Platform, public navCtrl: NavController) {
    this.platform.ready().then(() => {
      this.platformOS = this.platform.platforms();
      if (this.platform.isPortrait()) {
        this.platformOrientation = "portrait";
      } else this.platformOrientation = "landscape";
      this.getValue('testA');
    });
  }

  getValue(key: string) {
    if (this.platform.is('cordova')) {
        let nativeStorage: NativeStorage;
        nativeStorage.getItem(key)
          .then(
            data => console.log(data),
            error => console.log(error)
          )
      } else console.warn('Native Storage not available on this device')
  };

}
