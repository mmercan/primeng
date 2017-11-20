import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from '../domain/car';
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
    }
}
