import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventariosComponent } from './inventarios/inventarios.component';
import { ProductosComponent } from './productos/productos.component';
import { VentasComponent } from './ventas/ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    InventariosComponent,
    ProductosComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
