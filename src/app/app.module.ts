import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';

import { LoginModule } from './login/login.module';

import { MapPage } from '../pages/map/map';
import { ProfilePage } from '../pages/profile/profile';
import { MissionsPage } from '../pages/missions/missions';
import { CreateMissionPage } from '../pages/createmission/createmission';
import { TabsPage } from '../pages/tabs/tabs';

import { MissionViewPage } from '../pages/missionview/missionview';

import { MissionService } from '../providers/mission.service';
import { AchievementService } from '../providers/achievement.service';
import { AdventurerService } from '../providers/adventurer.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MapPage,
    ProfilePage,
    MissionsPage,
    TabsPage,
    MissionViewPage,
    CreateMissionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapPage,
    ProfilePage,
    MissionsPage,
    TabsPage,
    MissionViewPage,
    CreateMissionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    MissionService,
    AchievementService,
    AdventurerService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
