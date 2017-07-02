import { Component } from '@angular/core';

import { MapPage } from '../map/map';
import { ProfilePage } from '../profile/profile';
import { MissionsPage } from '../missions/missions';
import { CreateMissionPage } from '../createmission/createmission';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MissionsPage;
  tab2Root = MapPage;
  tab3Root = ProfilePage;
  tab4Root = CreateMissionPage;

  constructor() {

  }
}
