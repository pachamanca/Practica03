import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './categoria/agregar/agregar.component';
import { EditarComponent } from './categoria/editar/editar.component';
import { ListarComponent } from './categoria/listar/listar.component';


const routes: Routes = [
  {path: 'agregar',component:AgregarComponent},
  {path: 'editar', component:EditarComponent},
  {path: 'listar', component:ListarComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
