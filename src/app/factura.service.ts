import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Factura } from './facturas';
import { Detalles } from './mock-detalle-producto';
import { MessageService } from './mensaje.service';

@Injectable({
  providedIn: 'root',
})
export class FacturaService {

  constructor(private messageService: MessageService) { }

  getFacturas(): Observable<Factura[]> {
        this.messageService.add('FacturaService: fetched heroes');
    return of(Detalles);
  }
}