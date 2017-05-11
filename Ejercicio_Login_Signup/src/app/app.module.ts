import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from '../pages/principal/principal';
import { PageOnePage } from '../pages/page-one/page-one';
import { PageTwoPage } from '../pages/page-two/page-two';
import { PageThreePage } from '../pages/page-three/page-three';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage,
    PageOnePage,
    PageTwoPage,
    PageThreePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrincipalPage,
    PageOnePage,
    PageTwoPage,
    PageThreePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
