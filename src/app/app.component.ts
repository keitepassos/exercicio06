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
      title: 'People',
      url: '/people',
      icon: 'people'
    }
    ,
    {
      title: 'Planets',
      url: '/planets',
      icon: 'planet'
    },
    {
      title: 'Films',
      url: '/films',
      icon: 'film'
    }
    ,
    {
      title: 'StartShips',
      url: '/startships',
      icon: 'jet'
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
