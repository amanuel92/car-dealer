import { Injectable } from '@angular/core'


import {HttpClient} from '@angular/common/http';


// some imports included for the get request, because HttpClient uses RxJS code,
// including error handling and Observables
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { catchError, map, tap, retry } from 'rxjs/operators';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx';


@Injectable()

export class CarsService {

      cars: any[];
      constructor(private _http:HttpClient){}



      getCarTypes():Observable<any>  {

            return this._http.get("./assets/types.json");

      }


      getCarBrands():Observable<any> {

          return this._http.get("./assets/brands.json");

      }

      getInventory():Observable<any> {

          return this._http.get("./assets/cars.json");

      }



      getCarById(id) {

        let car = INVENTORY.filter(car => car.id == id);
        //should return an array of one element since id is unique
        return car[0];

      }




}

let INVENTORY =  [

{
id:"123",
make:"Tesla",
model:"Model S",
year:"2017",
milage:"50,000",
color:"red",
price:"$60,000",
type:"sedan",
used:"yes",
owners: 2

}]
