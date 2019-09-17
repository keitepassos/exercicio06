import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },        
    {
      title: 'People',
      url: '/people',
      icon: 'people'
    }
    ,
    {
      title: 'Planets',
      url: '/planets',
      icon: 'planets'
    },
    {
      title: 'Films',
      url: '/films',
      icon: 'films'
    }
    ,
    {
      title: 'StartShips',
      url: '/startships',
      icon: 'startships'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
