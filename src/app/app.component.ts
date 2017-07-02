import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginService } from './login/login.service';
import { LoginComponent } from './login/login.component';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  template: '<ion-nav #baseNav></ion-nav>',
  providers: [LoginService]
})
export class MyApp {
  rootPage:any = TabsPage;
  @ViewChild('baseNav') nav: Nav;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private loginService: LoginService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  ngOnInit() {
    const componentStack: Array<{page: Component}> = [{
      page: TabsPage
    }];

    if (!this.loginService.isLoggedIn) {
      componentStack.push({ page: LoginComponent });
    }

    this.nav.insertPages(0, componentStack, { animate: false });
  }
}
