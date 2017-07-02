import { Component, OnInit } from '@angular/core';

import { Achievement } from '../../classes/achievement';
import { AchievementService } from '../../providers/achievement.service';
 
@Component({
  selector: 'app-achievements',
  templateUrl: '',
  styleUrls: [ '' ]
})

export class AchievementsComponent implements OnInit {
  achievements: Achievement[];
  selectedAchievement: Achievement;
 
  constructor(
    private achievementService: AchievementService) { }
 
  getAchievements(): void {
    this.achievementService
        .getAchievements()
        .then(achievements => this.achievements = achievements);
  }
 
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.achievementService.create(name)
      .then(achievement => {
        this.achievements.push(achievement);
        this.selectedAchievement = null;
      });
  }
 
  delete(achievement: Achievement): void {
    this.achievementService
        .delete(achievement.id)
        .then(() => {
          this.achievements = this.achievements.filter(ach => ach !== achievement);
          if (this.selectedAchievement === achievement) { this.selectedAchievement = null; }
        });
  }
 
  ngOnInit(): void {
    this.getAchievements();
  }
 
  onSelect(achievement: Achievement): void {
    this.selectedAchievement = achievement;
  }

}
