import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CarsService } from '../../shared/cars.service';


@Component({


  selector: 'cars-for-sale',

  template: `

  <section class="container cars-for-sale-container">

    <div class="row">

      <div *ngFor="let car of cars" class="col-sm-4 car-img-info-container">

          <div>
              <img class="car-image" src='./assets/convertible.png'>
              <div class="car-info-container">
                  <h5 class="car-name">  {{car.year}} {{car.make}} {{car.model}}</h5>

                  <div class="row">
                    <div class="col-sm-6 car-price-mileage-container">
                        <span class="car-price-title"> PRICE </span>
                        <h6 class="car-price">{{car.price}}</h6>
                        <span class="car-mileage-title"> MILEAGE </span>
                        <h6 class="car-milage">{{car.milage}}</h6>
                    </div>

                    <div class="col-sm-6 extra-detail">

                      <div *ngIf="car.used == 'no'" class="new">
                          <span>NEW</span>
                      </div>

                      <div *ngIf="car.used == 'yes'" class="used">
                          <span class="owners-label">OWNERS</span>
                          <h6 class="owners">{{car.owners}}</h6>
                      </div>
                      <div class="color-container">

                          <span class="color-label">Color</span>
                          <div class="color" [style.background-color]="car.color">&nbsp;</div>



                      </div>

                    </div>
                  </div>
              </div>
              <div class="more-detail-button" [routerLink]="['/car-detail', car.id]">
                  MORE DETAILS
              </div>
          </div>
      </div>

    </div>

  </section>

  `,

  styles: [`



    .car-img-info-container {
      margin-top:30px;
      margin-bottom:30px;



    }

    .car-image {
      border: 1px solid #e1e1e1;
      height:100%;
      width:100%;

    }

    .car-name{
        padding-top:10px;
    }


    .car-info-container {
      background-color: #f2f2f2;
      text-align: left;
    }

    .car-name {
      text-align: center;
    }


    .car-price-mileage-container {

      padding-bottom: 20px;

    }

    .car-price, .car-milage {
      font-weight: bold;
      padding-left:15px;
    }

    .car-mileage-title {
      padding-left:15px;
    }

    .car-price-title {
      padding-left:15px;
    }

    .new {
      padding-left:0px;
    }

    .new span{
      background-color: green;
      padding: 3px;
      padding-right: 15px;
      padding-left: 15px;
      border-radius: 2em;

    }

    .owners-label, .owners {
      padding-left: 15px;
    }
    .color-container{
      padding-left: 15px;
    }
    .color-label {
      margin-top:15px;


    }

    .color {
        display: block;
        width: 15%;
        border-radius: 2em;


    }

    .more-detail-button {
      border: 1px solid #d35400;
      background-color: #d35400;
    }

    .more-detail-button:hover {
    color: #d35400;
    background-color:white;
  }




    `]

})


export class CarsForSaleListComponent {

  cars:any []

  //injecting service
  constructor (private carsService: CarsService, private route:ActivatedRoute) {

  }


  ngOnInit() {

    let path = this.route.snapshot.routeConfig.path;
    let brokenPath = path.split('/');
    let searchType = brokenPath[0];

    if (searchType == 'cars-for-sale-by-status')

        this.carsService.getInventory().subscribe((cars) => {

            this.cars = cars.INVENTORY;
            if (this.route.snapshot.params['status'] == 'new')
                this.cars = this.cars.filter(car => car.used == 'no');
            else if (this.route.snapshot.params['status'] == 'used')
                this.cars = this.cars.filter(car => car.used == 'yes');
        })

    else if (searchType == 'cars-for-sale-by-type')

        this.carsService.getInventory().subscribe((cars) => {

            this.cars = cars.INVENTORY;
            this.cars = this.cars.filter(car => car.type == this.route.snapshot.params['type']);
        })


    else if (searchType == 'cars-for-sale-by-make')

        this.carsService.getInventory().subscribe((cars) => {

            this.cars = cars.INVENTORY;
            this.cars = this.cars.filter(car => car.make == this.route.snapshot.params['make']);
        })

    else if (searchType == 'cars-for-sale-by-model')

        this.carsService.getInventory().subscribe((cars) => {

            this.cars = cars.INVENTORY;
            this.cars = this.cars.filter(car => car.model == this.route.snapshot.params['model']);
        })


  }


}
