import { Component, OnInit } from '@angular/core';
import { ConService } from 'src/app/service/con.service';

@Component({
  selector: 'app-lista-agregada',
  templateUrl: './lista-agregada.component.html',
  styleUrls: ['./lista-agregada.component.css']
})
export class ListaAgregadaComponent implements OnInit {
  item:any={name:''};
  constructor(private ser:ConService) { }

  ngOnInit(): void {
  }

  agregar(){
    this.ser.addItem(this.item);
  }
}
