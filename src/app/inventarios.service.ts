import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Producto {
  id: number;
  nombre: string;
  cantidad: number;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})
export class InventariosService {
  private productos: Producto[] = [
    {id: 1, nombre: 'Celular', cantidad: 2, precio: 1300000 },
    {id: 1, nombre: 'IPad', cantidad: 4, precio: 820000 },
  ];

  constructor() { }

  obtenerProductos(): Observable<Producto[]> {
    return of(this.productos);
  } 

  agregarProductos(producto: Producto): void {
    this.productos.push(producto);

  }

  actualizarProducto(producto: Producto): void {
    const index = this.productos.findIndex(p => p.id === producto.id )
    if (index !== -1){
      this.productos[index] = producto;
  }
  }
  eliminarProducto(id: Number): void {
    this.productos = this.productos.filter(p => p.id !== id);
  }
}
