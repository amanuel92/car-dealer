import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';


//home page components
import { CarsTypeListComponent} from './cars/type/cars-type-list.component';
import { CarsBrandListComponent } from './cars/brands/cars-brand-list.component';
import { CarsDealerHeaderComponent} from './home/header/cars-dealer-header.component';
import { HomeComponent } from './home/home.component';

//cars for sale component
import { CarsForSaleListComponent } from './cars/forsale/cars-for-sale-list.component'
import { appRoutes } from './routes';

//shared components
import { CarsService} from './shared/cars.service';
import { CarDealerFooterComponent } from './shared/footer/car-dealer-footer.component';
import { NavBarComponent } from './shared/navbar/navbar.component';
import { CarForSaleDetailComponent } from './cars/forsale/car-for-sale-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    CarsDealerHeaderComponent,
    CarsTypeListComponent,
    CarsBrandListComponent,
    CarDealerFooterComponent,
    NavBarComponent,
    HomeComponent,
    CarsForSaleListComponent,
    CarForSaleDetailComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
