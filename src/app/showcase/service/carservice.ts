import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Car } from '../domain/car';
<<<<<<< HEAD
import 'rxjs/add/operator/map';
import { CommonDataStoreService } from '../service/common-data-store/common-data-store.service';

@Injectable()
export class CarService extends CommonDataStoreService<any>  {

    constructor(private http: Http) {
        super(http, 'assets/showcase/data/cars-large.json', 'id');
    }

    getCarsSmall() {
        return this.http.get('assets/showcase/data/cars-small.json')
            .toPromise()
            .then(res => <Car[]>res.json().data)
            .then(data => { return data; });
    }

    getCarsMedium() {
        return this.http.get('assets/showcase/data/cars-medium.json')
            .toPromise()
            .then(res => <Car[]>res.json().data)
            .then(data => { return data; });
    }

    getCarsLarge() {
        return this.http.get('assets/showcase/data/cars-large.json')
            .toPromise()
            .then(res => <Car[]>res.json().data)
            .then(data => { return data; });
    }


    getCarsLarge2() {
        return this.http.get('assets/showcase/data/cars-large.json')
            .map(res => <Car[]>res.json().data)
            .map(data => data);
=======

@Injectable()
export class CarService {

    constructor(private http: HttpClient) { }

    getCarsSmall() {
    return this.http.get<any>('assets/showcase/data/cars-small.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => { return data; });
    }

    getCarsMedium() {
    return this.http.get<any>('assets/showcase/data/cars-medium.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => { return data; });
    }

    getCarsLarge() {
    return this.http.get<any>('assets/showcase/data/cars-large.json')
      .toPromise()
      .then(res => <Car[]>res.data)
      .then(data => { return data; });
>>>>>>> d21992e62584de0db47e5db0c2f49371ad6b2ed0
    }
}
