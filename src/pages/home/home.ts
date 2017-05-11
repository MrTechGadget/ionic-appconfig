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
    });
  }

 // getValue(key: string) {
 //   this.nativeStorage.getItem(key)
 //     .then(
 //       data => console.log(data),
 //       error => console.error(error)
 //     );
 // }

  //private nativeStorage: NativeStorage, 

}
