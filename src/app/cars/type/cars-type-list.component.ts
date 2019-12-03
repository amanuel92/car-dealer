import { Component, OnInit} from '@angular/core';
import { CarsService } from '../../shared/cars.service';


@Component({
  selector: 'cars-type-list',


  template: `

  <div class="container car-type-list-container">
    <h1 class="type-header-text">Choose a Type</h1>
    <div class="row">
      <div [routerLink]="['/cars-for-sale-by-type', type]" *ngFor="let type of types" class="col-sm-4 car-type-thumbnail">
          <img class="car-type-image" [src]="'./assets/'+ type +  '.png'">
          <div class="type-text-container">
            {{type}}
          </div>
      </div>
    </div>
  </div>`,


 styles:  [`

   .car-type-list-container {margin-bottom: 50px;}

   .type-header-text {
     font-weight: lighter;
     padding-top: 25px;
   }
   .car-type-thumbnail {margin-top:50px;}


   .type-text-container {border: 1px solid #d35400;
      box-shadow: 0 8px 6px -6px black;
      font-weight:lighter;
      border-bottom-left-radius: 20em;
      border-bottom-right-radius: 20em;
      background-color:#d35400;
      color: white;
   }
   .car-type-image {
     border: 1px solid #e1e1e1;
     height:150px;
     width:100%;
   }

   .car-type-thumbnail:hover .car-type-image {
     height:145px;
     width:100%;
   }


 `]


})



export class CarsTypeListComponent implements OnInit {


  types:any;

  //creates carsService variable of type CarsService during construction
  constructor(private carsService: CarsService) {
  }


  ngOnInit() {

    this.getCarTypes();

  }

  getCarTypes(){
      this.carsService.getCarTypes().subscribe((types) => {
          this.types = types.TYPES;
      })
  }




}
