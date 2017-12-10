import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls:['home.component.scss']
})

export class HomeComponent implements OnInit {
    constructor() { }
    images=[{url:'../../../../assets/images/make-car/fiat.png'},
            {url:'../../../../assets/images/make-car/ford.png'},
            {url:'../../../../assets/images/make-car/hyundai.png'},
            {url:'../../../../assets/images/make-car/kia.png'},
            {url:'../../../../assets/images/make-car/mazda.png'},
            {url:'../../../../assets/images/make-car/nissan.png'},
            {url:'../../../../assets/images/make-car/opel.png'},
            {url:'../../../../assets/images/make-car/peugeot.png'},
            {url:'../../../../assets/images/make-car/porsche.png'},
            {url:'../../../../assets/images/make-car/seat.png'},
            {url:'../../../../assets/images/make-car/toyota.png'},
            {url:'../../../../assets/images/make-car/vw.png'},
        ]
    ngOnInit() { }
}