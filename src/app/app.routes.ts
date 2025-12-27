import { Routes } from '@angular/router';
import { Hero } from '../hero/hero';
import { Changelog } from '../changelog/changelog';

export const routes: Routes = [

  { path: "", component: Hero },
  { path: "changelogs", component: Changelog },

];
