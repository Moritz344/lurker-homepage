import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-changelog-item',
  imports: [],
  templateUrl: './changelog-item.html',
  styleUrl: './changelog-item.css',
})
export class ChangelogItem implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }


}
