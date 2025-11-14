import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-feature',
  imports: [],
  templateUrl: './feature.html',
  styleUrl: './feature.css',
})
export class Feature {
  @Input() name: string = "";
  @Input() description: string = "";

  constructor() {}

}
