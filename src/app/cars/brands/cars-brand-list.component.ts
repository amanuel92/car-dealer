import { Component, OnInit} from '@angular/core';
import { CarsService } from '../../shared/cars.service';



@Component({


  selector: 'cars-brand-list',

  template: `
  <section class="brands-section">
    <h1 class="brand-header-text">Choose a brand</h1>
      <div class="row brands-container">
        <div *ngFor="let brand of brands" class="col-sm-2">
            <a [routerLink]="['/cars-for-sale-by-make', brand]" class="brand-text">
              {{brand}}
            </a>
        </div>
      </div>
  </section>
  `,


  styles: [`



  .brand-header-text {
    font-weight: lighter;
    padding-top: 25px;
    padding-bottom: 20px;

  }

  .col-sm-2 {margin-top:20px;}
  .brand-text {color:#d35400;}
  .brands-container {padding-bottom:60px;}

  `]
})


export class CarsBrandListComponent implements OnInit {

brands: any[];


//creates carsService variable of type CarsService during construction
constructor(private carsService: CarsService) {
}

//calls getCarBrands method to fetch data
ngOnInit() {
//this.brands = this.carsService.getCarBrands();
this.getCarBrands();
}

getCarBrands() {
  //first function call will return observable
  //by subscribing to the observable
 //we're taking response and setting it to the brands varraible of this componenet


 this.carsService.getCarBrands().subscribe((brands) => {
   this.brands = brands.BRANDS;
 })

}


//for testing 


}
