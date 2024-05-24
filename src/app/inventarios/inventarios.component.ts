import { Component, OnInit } from '@angular/core';
import { InventariosService, Producto } from '../inventarios.service';

@Component({
  selector: 'app-inventarios',
  templateUrl: './inventarios.component.html',
  styleUrls: ['./inventarios.component.scss']
})
export class InventariosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private inventariosService: InventariosService){}

  ngOnInit(): void {
      this.obtenerProductos();
  }

  obtenerProductos(): void{
    this.inventariosService.obtenerProductos().subscribe(productos => this.productos = productos);
  }

  eliminarProductos(id:number):void{
    this.inventariosService.eliminarProducto(id);
    this.obtenerProductos();
  }

}
