import { Component } from '@angular/core';



@Component({


  selector: 'footer',

  template: `

  <section class="footer-section">


      <div class="row footer-titles-row">

        <div class="col-sm-6">
            <div class="row">
                <div class="col-sm-4">
                    <h5>Shop</h5>
                    <a href="#">Find a car</a>
                    <a href="#">View all inventory</a>
                </div>
                <div class="col-sm-4">
                    <h5>About Us</h5>
                    <a href="#">History</a>
                    <a href="#">Locations</a>
                </div>
                <div class="col-sm-4">
                    <h5>Career</h5>
                    <a href="#">Search jobs</a>
                </div>
            </div>
        </div>

        <div class="col-sm-6">
          <h5>social media</h5>
        </div>

      </div>





  </section>
`,


  styles: [`

      .footer-section {

        background-color: #d35400;
      }
      .footer-titles-row {
        padding-top: 25px;
        padding-bottom: 20px;
      }
      .footer-titles {
        color: white;
      }

      .col-sm-4 a {
        color: white;
        font-weight: lighter;
        display: block;
        padding-top: 5px;
        padding-bottom: 5px;
      }


    `]

})


export class CarDealerFooterComponent {



}
