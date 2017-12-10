import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var jquery:any;
declare var $ :any;
declare var CarQuery :any;
$(document).ready(
    function()
    {
        var carquery = new CarQuery();
        carquery.init();
        carquery.setFilters( {sold_in_us:true} ); 
        carquery.initYearMakeModelTrim('car-years', 'car-makes', 'car-models', 'car-model-trims');
    
    });
@Component({
    selector: 'app-contacto',
    templateUrl: 'contacto.component.html',

})

export class ContactoComponent  {


    forma:FormGroup;
    constructor() {
        this.forma= new FormGroup({
            'nombre': new FormControl('', Validators.required),
            'apellido': new FormControl('',Validators.required),
            'correo': new FormControl('',[Validators.required])
        })
     }

     guardarCambios(){
         
     }

    
}