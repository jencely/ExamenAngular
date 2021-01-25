export interface Factura {
   fecha_emision: string;
   numero_factura: number;
   cedula_ruc: number;
   nombre_cliente: string;
   direccion: string;
   telefono: number;
   subtotal: number;
   iva: number;
   total: number;
}