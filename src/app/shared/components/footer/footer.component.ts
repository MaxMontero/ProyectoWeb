import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html'
})

export class FooterComponent implements OnInit {
    anio:number=2017;
    
    constructor() { }
    ngOnInit() { }
}