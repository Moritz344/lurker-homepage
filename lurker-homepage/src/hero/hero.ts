import { Component } from '@angular/core';
import { Feature } from '../feature/feature';

@Component({
  selector: 'app-hero',
  imports: [Feature],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

}
