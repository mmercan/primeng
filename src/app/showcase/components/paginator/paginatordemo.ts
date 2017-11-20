import { Component, OnInit } from '@angular/core';
import { CarService } from '../../service/carservice';
@Component({
    templateUrl: './paginatordemo.html'
})
export class PaginatorDemo implements OnInit {
    constructor(private carService: CarService) {

    }
    cars: any[];
    filter = {
        brand: ''
    };
    pagedCars: any[];
    ngOnInit() {


        this.carService.dataset.subscribe(
            response => {
                this.cars = response;
            },
            error => { console.log(error); }
        );
        this.carService.getAll();

        //  this.loading = true;
        //setTimeout(() => {



        // this.carService.getCarsLarge().then(
        //     cars => this.cars = cars
        // );

        // this.carService.getCarsLarge2().subscribe(
        //     cars => this.cars = cars,
        //     error => { console.log(error); }


        // );



        // this.loading = false;
        //}, 1000);

    }
}
