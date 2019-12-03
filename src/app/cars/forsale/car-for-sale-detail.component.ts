import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../../shared/cars.service';


@Component({
  selector: 'car-for-sale-detail',
  template: `

  <div class="row car-detail-container">
      <div class="col-sm-8">
          <img class="car-image" src='./assets/convertible.png'>
      </div>
      <div class="col-sm-4 car-info">
        <div class="year-model-make">
          <span class="year-and-model">{{car.year}} {{car.model}}</span>
          <span class="make" >{{car.make}}</span>
          <hr>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <span class="info-title">Price</span>
                <span class="price">{{car.price}}</span>
            </div>
            <div class="col-sm-6">
                <span class="info-title">Mileage</span>
                <span class="mileage">{{car.milage}}</span>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6">
                <span class="info-title">Owners</span>
                <span class="owners">{{car.owners}}</span>
            </div>
            <div class="col-sm-6">
                <span class="info-title">Color</span>
                <span class="color">yellow</span>
            </div>
        </div>


      </div>
  </div>
  `,

  styles: [`

    .car-detail-container {
        height: 650px;
        background-color: #e1e1e1;


    }


    .year-model-make {
      margin-top: 30px;
      text-align: left;
      font-size: 25px;
      margin-left: 10px;
      font-weight: bold;
    }

    span.make {
      font-size: 15px;
      font-weight: light;
    }

    .info-title {

      text-align: left;
      display: block;
      margin-left: 10px;
      margin-top: 15px;
      font-size:20px;
      font-weight: bold;
      text-decoration: underline;
      color:#d35400;

    }

    .price, .mileage, .owners, .color {
      display: block;
      text-align: left;
      margin-left : 10px;

    }




    img{

      width: 80%;
      height: 60%;
    }

    .make {
      display: block;

    }


  `]


})




export class CarForSaleDetailComponent {

  id:any
  car:any

  constructor (private carsService: CarsService, private route:ActivatedRoute) {

  }

  ngOnInit() {


    this.id = this.route.snapshot.params['car'];
    this.car = this.carsService.getCarById(this.id);
    console.log(this.car.make);

  }

}
