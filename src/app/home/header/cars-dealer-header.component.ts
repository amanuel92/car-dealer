import { Component } from '@angular/core';



@Component({
  selector: 'cars-dealer-header',


  template: `
  <section class="header-section">


    <div class="message-container">

      <div class="row">
        <div class="col">
          <h1 class="message-1">Need A Car <span class="q-mark">?</span></h1>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h1 class="message-2">We Can Help!</h1>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div [routerLink]="['/cars-for-sale-by-status','new']" class="new-used-car-button">New Cars</div>
          <div [routerLink]="['/cars-for-sale-by-status','used']" class="new-used-car-button">Used Cars</div>
        </div>
      </div>

    </div>

  </section>

        `,




 styles:  [`

   .header-section {

     height: 400px;
     background-image: url(./assets/Porsche_rear.png);
     background-repeat: no-repeat;
     background-size: full;
     background-position: right center;

   }

   .message-container {
     padding-top: 120px;
   }

   .message-1 {
     color:#d35400;;
     font-size: 62px;
     font-weight: bold;
   }
   .message-2 {

     color:#d35400;
     font-size: 38px;
     font-weight: bold;
     border: yellow;
   }


   .new-used-car-button{

     display: inline-block;
     margin-right:25px;
     border-radius: 20em;
     border: 1px solid #d35400;
     color: white;
     font-weight: lighter;
     width: 150px;
     hieight: 100px;
     background-color:#d35400;


   }

   .new-used-car-button:hover {

       color: #d35400;
       background-color:white;

   }


 `]


})



export class CarsDealerHeaderComponent {

//background picture of landing header changes depnding on day


}
