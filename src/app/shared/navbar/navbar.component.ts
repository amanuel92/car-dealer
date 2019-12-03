import { Component } from '@angular/core';



@Component({
  selector: 'navbar',


  template: `

  <nav class="navbar navbar-expand-lg navbar-light bg-light">

    <a class="navbar-brand" href="#">CarWorld</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['cars-by-brand']">MAKE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['cars-by-type']">TYPE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">MORE</a>
        </li>
      </ul>
    </div>
  </nav>

        `,




 styles:  [`

   .nav-item a {
      color: #d35400;
   }





 `]


})



export class NavBarComponent{

}
