import { Component, OnInit } from '@angular/core';

import { Mission } from '../../classes/mission';
import { MissionService } from '../../providers/mission.service';
 
@Component({
  selector: 'app-missions',
  templateUrl: '',
  styleUrls: [ '' ]
})

export class MissionsComponent implements OnInit {
  missions: Mission[];
  selectedMission: Mission;
 
  constructor(
    private missionService: MissionService) { }
 
  getMissions(): void {
    this.missionService
        .getMissions()
        .then(missions => this.missions = missions);
  }
 
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.missionService.create(name)
      .then(mission => {
        this.missions.push(mission);
        this.selectedMission = null;
      });
  }
 
  delete(mission: Mission): void {
    this.missionService
        .delete(mission.id)
        .then(() => {
          this.missions = this.missions.filter(m => m !== mission);
          if (this.selectedMission === mission) { this.selectedMission = null; }
        });
  }
 
  ngOnInit(): void {
    this.getMissions();
  }
 
  onSelect(mission: Mission): void {
    this.selectedMission = mission;
  }

}
