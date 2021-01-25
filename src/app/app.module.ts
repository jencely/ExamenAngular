import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturaComponent } from './facturas/facturas.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { FacturaDetalleComponent } from './factura-detalle/factura-detalle.component';

@NgModule({
  declarations: [
    AppRoutingModule,
    AppComponent,
    FacturaComponent,
    MensajesComponent,
    FacturaDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
