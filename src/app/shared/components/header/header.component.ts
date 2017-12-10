import { Component, OnInit, ViewChild } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls:['header.component.scss']
    
})

export class HeaderComponent implements OnInit {
    @ViewChild('owlElement') owlElement: OwlCarousel
    
    prueba(){
        console.log(this.owlElement);
    }
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
    constructor() { 
        
    }


    
    ngOnInit() { }
}