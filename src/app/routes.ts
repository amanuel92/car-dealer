import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CarsForSaleListComponent } from './cars/forsale/cars-for-sale-list.component';
import { CarsBrandListComponent } from './cars/brands/cars-brand-list.component';
import { CarsTypeListComponent} from './cars/type/cars-type-list.component';
import { CarForSaleDetailComponent} from './cars/forsale/car-for-sale-detail.component';

export const appRoutes: Routes = [

  { path: '', component:  HomeComponent},
  { path: 'cars-for-sale-by-status/:status', component:  CarsForSaleListComponent},
  { path: 'cars-for-sale-by-type/:type', component:  CarsForSaleListComponent},
  { path: 'cars-for-sale-by-make/:make', component:  CarsForSaleListComponent},
  { path: 'cars-for-sale-by-model/:model', component:  CarsForSaleListComponent},
  { path: 'cars-by-brand', component: CarsBrandListComponent},
  { path: 'cars-by-type', component: CarsTypeListComponent},
  { path: 'car-detail/:car', component: CarForSaleDetailComponent}

]
