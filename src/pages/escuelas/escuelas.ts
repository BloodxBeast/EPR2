import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EscuelasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-escuelas',
  templateUrl: 'escuelas.html',
})
export class EscuelasPage {
  
  toggleValue: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  change(){
    console.log(this.toggleValue);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EscuelasPage');
  }

}
