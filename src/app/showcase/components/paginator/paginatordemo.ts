import { Component, OnInit } from '@angular/core';
import { CarService } from '../../service/carservice';
@Component({
    templateUrl: './paginatordemo.html'
})
export class PaginatorDemo implements OnInit {
    constructor(private carService: CarService) {

    }
    cars: any[];
    pagedCars: any[];
    ngOnInit() {
        //  this.loading = true;
        //setTimeout(() => {
        this.carService.getCarsLarge().then(
            cars => this.cars = cars
        );
        // this.loading = false;
        //}, 1000);

    }
}
