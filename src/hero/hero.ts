import { Component } from '@angular/core';
import { Topbar } from '../topbar/topbar';

@Component({
  selector: 'app-hero',
  imports: [Topbar],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  listOfFeatures: { emotes: string[], chat: string[] } = { emotes: [], chat: [] };

  initFeatures() {
    this.listOfFeatures = {
      emotes: ["See and type channel emotes and global emotes"],
      chat: ["See user color", "See user badges"],
    };
  }

  constructor() {
    this.initFeatures();
    console.log(this.listOfFeatures);

  }

}
