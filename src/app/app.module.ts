import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarComponent } from './categoria/agregar/agregar.component';
import { EditarComponent } from './categoria/editar/editar.component';
import { ListarComponent } from './categoria/listar/listar.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service/service.service';
import{FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    EditarComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
