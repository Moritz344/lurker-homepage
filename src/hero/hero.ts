import { Component } from '@angular/core';
import { Topbar } from '../topbar/topbar';

@Component({
  selector: 'app-hero',
  imports: [Topbar],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {


  constructor() {

  }

}
