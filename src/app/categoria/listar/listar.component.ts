import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  categorias: Object[];
  constructor(private service: ServiceService, private router: Router) { }
  
  ngOnInit() {
    this.service.getCategorias().subscribe(data=>{this.categorias=data;})
  }

}
