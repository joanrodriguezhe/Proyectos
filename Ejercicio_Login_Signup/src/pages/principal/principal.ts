import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PageOnePage } from '../page-one/page-one';
import { PageTwoPage } from '../page-two/page-two';
import { PageThreePage } from '../page-three/page-three';

import { Nav, Platform } from 'ionic-angular';
/*
  Generated class for the Principal page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})
export class PrincipalPage {
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = PageOnePage;

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.pages = [
      { title: 'Page One', component: PageOnePage },
      { title: 'Page Two', component: PageTwoPage },
      { title: 'Page Three', component: PageThreePage }
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  openPage(p) {
    this.nav.setRoot(p.component);
  }

}

