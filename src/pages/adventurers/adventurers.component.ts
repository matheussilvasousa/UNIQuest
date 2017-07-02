import { Component, OnInit } from '@angular/core';

import { Adventurer } from '../../classes/adventurer';
import { AdventurerService } from '../../providers/adventurer.service';
 
@Component({
  selector: 'app-adventurers',
  templateUrl: '',
  styleUrls: [ '' ]
})

export class AdventurersComponent implements OnInit {
  adventurers: Adventurer[];
  selectedAdventurer: Adventurer;
 
  constructor(
    private adventurerService: AdventurerService) { }
 
  getAdventurers(): void {
    this.adventurerService
        .getAdventurers()
        .then(adventurers => this.adventurers = adventurers);
  }
 
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.adventurerService.create(name)
      .then(adventurer => {
        this.adventurers.push(adventurer);
        this.selectedAdventurer = null;
      });
  }
 
  delete(adventurer: Adventurer): void {
    this.adventurerService
        .delete(adventurer.id)
        .then(() => {
          this.adventurers = this.adventurers.filter(adv => adv !== adventurer);
          if (this.selectedAdventurer === adventurer) { this.selectedAdventurer = null; }
        });
  }
 
  ngOnInit(): void {
    this.getAdventurers();
  }
 
  onSelect(adventurer: Adventurer): void {
    this.selectedAdventurer = adventurer;
  }

}
