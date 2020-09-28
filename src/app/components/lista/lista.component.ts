import { Component, OnInit } from '@angular/core';
import { ConService } from './../../service/con.service';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  items:any;
  editarItem:any={name:''};
  constructor(private con:ConService) { 
    this.items = con.devuelveItems().subscribe(item=>{
      this.items=item;
      console.log(this.items);
    });
  }

  eliminar(item){
    this.con.eliminar(item);
  }

  editar(item){
    this.editarItem = item;
  }

  formEditar(){
      this.con.editar(this.editarItem);
  }

  ngOnInit(): void {
  }

}
