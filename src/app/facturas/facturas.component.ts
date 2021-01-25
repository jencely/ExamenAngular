import { Component, OnInit } from '@angular/core';
import { Factura } from '../facturas';
import { FacturaService } from '../factura.service';
import { MessageService } from '../mensaje.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturaComponent implements OnInit {
  
   selectedFactura: Factura|null=null;
   facturas: Factura[] = [];
  constructor(private facturaService: FacturaService, private mensajesService:MessageService) { }

  ngOnInit(): void {
    this.getFacturas();
  }

  onSelect(facturas:Factura):void {  
    this.selectedFactura=facturas;
    this.mensajesService.add("Número de factura seleccionada"+facturas.numero_factura);
  }

  getFacturas(): void {
    this.facturaService.getFacturas()
      .subscribe((facturas: Factura[]) => this.facturas = facturas)
  }

}
