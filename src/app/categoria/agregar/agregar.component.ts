import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private router: Router, private service:ServiceService) { }

  ngOnInit() {
  }
  Guardar(nombre:String){
    this.service.createCategoria(nombre).subscribe(data=>{
      alert("Se registro correctamente......")
      this.router.navigate(["listar"])
    })
  }

}
