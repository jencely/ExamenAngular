import { Component, Input, OnInit } from '@angular/core';
import { Factura } from '../facturas';

@Component({
  selector: 'app-factura-detalle-component ',
  templateUrl: './factura-detalle.component.html',
  styleUrls: ['./factura-detalle.component.css']
})
export class FacturaDetalleComponent implements OnInit {
  @Input()facturas: Factura|null=null;
  constructor() { }

  ngOnInit(): void {
  }

}