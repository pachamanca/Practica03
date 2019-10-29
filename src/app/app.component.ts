import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica03';
  constructor(private router: Router){
  }
  agregar(){
    this.router.navigate(["agregar"])
  }
  listar(){
    this.router.navigate(["listar"])
  }
  editar(){
    this.router.navigate(["editar"])
  }
}
