import { Component } from '@angular/core';

import { CarsBrandListComponent } from '../cars/brands/cars-brand-list.component';
import { CarsTypeListComponent } from '../cars/type/cars-type-list.component';
import { CarsDealerHeaderComponent } from './header/cars-dealer-header.component';



@Component({

  selector: '',


  template: `
    <cars-dealer-header></cars-dealer-header>
    <hr>
    <cars-type-list></cars-type-list>
    <hr>
    <cars-brand-list></cars-brand-list>
  `,


  styles:  [``]


})



export class HomeComponent{

}
