import { Libro } from './../interfaces/libro.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  // arreglo de libros
  libros: Libro [] = [];

  // url de conexion hacia firebase
  librosURL = 'https://heroesapp-f0740.firebaseio.com/libros.json/';

  constructor(
    private http: HttpClient
  ) {
    this.getLibros();
  }

  /*
   Conexion http get para obtener los libros de firebase
   */
  getLibros() {
    const promesa = new Promise((resolve, reject) => {
      this.http.get( this.librosURL ).subscribe( (data: any)  => {
        // console.log(data);
        for (const d of data){
          if (d) {
            this.libros.push(d);
          }
        }
      });
    });
    return promesa;
  }

}
