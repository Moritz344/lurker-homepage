import { Component } from '@angular/core';
import { Topbar } from '../topbar/topbar';
import { Github } from '../services/github';
import { ChangelogItem } from '../changelog-item/changelog-item';

@Component({
  selector: 'app-changelog',
  imports: [Topbar, ChangelogItem],
  templateUrl: './changelog.html',
  styleUrl: './changelog.css',
})
export class Changelog {

  commitData: any;

  initCommits() {
    this.github.getCommits("Moritz344", "lurker").subscribe((response: any) => {
      this.commitData = response;
    });
  }

  constructor(public github: Github) {
    this.initCommits();
  }

}
