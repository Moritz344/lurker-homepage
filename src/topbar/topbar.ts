import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule,Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  imports: [FormsModule,CommonModule,RouterModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
})
export class Topbar {

  buttons = [
    {name: "Features",route: 'contact'},
    {name: "Dowloads",route: 'contact'},
    {name: "Changelog",route: 'changelog'},
  ];

  constructor(private router: Router) {}


  navigate(route: string) {
    this.router.navigate([route]);
  }

}
