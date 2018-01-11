import { Libro } from './../../interfaces/libro.interface';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../providers/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  libros: Libro [];
  search = true;
  numberTask = 0;

  constructor(
    private _ds: DataService
  ) {

  }

  ngOnInit() {

  }

  /*
  Método que se ejecuta mientras uno va escibiendo el libro a buscar
  */
  onSearchChange(searchValue: string) {
    // console.log(searchValue);
    if (!searchValue) {
      this.search = true;
      this.libros = [];
    } else {
      this.libros = this._ds.libros.filter(value => value.nombre.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);
      if (this.libros.length > 0) {
        this.search = false;
      }else {
        this.search = true;
      }
    }
  }

   /*
  Método que se ejecuta cuando se cambia el combo para buscar o listar todos
  */
  task(num: any) {
    this.numberTask = num;
    if (num === '1') {
      this.libros = this._ds.libros;
      this.search = false;
    }else {
      this.search = true;
      this.libros = [];
    }
  }

}
