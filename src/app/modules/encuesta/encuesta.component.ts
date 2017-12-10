import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
declare var CarQuery :any;


@Component({
    selector: 'app-encuesta',
    templateUrl: 'encuesta.component.html',
    styleUrls:['encuesta.component.scss']
    
})

export class EncuestaComponent implements OnInit {
    favoriteSeason: string;
    caracteristicasSi: string;
    seasons = [
        'Renovar',
        'Es mi Pimera Compra',
    ];

    images=[{
     nombre:'citadines',
     url: '../../../../assets/images/type-car/citadines/carro1.jpg',
     tipos:['../../../../assets/images/type-car/citadines/carro1.jpg',
            '../../../../assets/images/type-car/citadines/carro2.jpg',
            '../../../../assets/images/type-car/citadines/carro3.jpg',
            '../../../../assets/images/type-car/citadines/carro4.jpg'] 
    },{
        nombre:'suv',
        url: '../../../../assets/images/type-car/suv/carro2.jpg',
        tipos:['../../../../assets/images/type-car/suv/carro1.jpg',
               '../../../../assets/images/type-car/suv/carro2.jpg',
               '../../../../assets/images/type-car/suv/carro3.jpg',
               '../../../../assets/images/type-car/suv/carro4.jpg'] 
       },{
        nombre:'hashbag',
        url: '../../../../assets/images/type-car/hashbag/carro3.jpg',
        tipos:['../../../../assets/images/type-car/hashbag/carro1.jpg',
               '../../../../assets/images/type-car/hashbag/carro2.jpg',
               '../../../../assets/images/type-car/hashbag/carro3.jpg',
               '../../../../assets/images/type-car/hashbag/carro4.jpg'] 
       },{
        nombre:'ticos',
        url: '../../../../assets/images/type-car/ticos/carro4.jpg',
        tipos:['../../../../assets/images/type-car/ticos/carro1.jpg',
               '../../../../assets/images/type-car/ticos/carro2.jpg',
               '../../../../assets/images/type-car/ticos/carro3.jpg',
               '../../../../assets/images/type-car/ticos/carro4.jpg'] 
       }
    ]    
    constructor() { 
        $(document).ready(
            function()
            {
                var carquery = new CarQuery();
                carquery.init();
                carquery.setFilters( {sold_in_us:true} ); 
                carquery.initYearMakeModelTrim('car-years', 'car-makes', 'car-models', 'car-model-trims');
            
            }
        );
    }

    ngOnInit() { }
}