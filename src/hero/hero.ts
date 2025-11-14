import { Component } from '@angular/core';
import { Feature } from '../feature/feature';
import { Topbar } from '../topbar/topbar';

@Component({
  selector: 'app-hero',
  imports: [Feature,Topbar],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

}
