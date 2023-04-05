import { Component } from '@angular/core';
import { RickAndMortyService } from './services/rick-and-morty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PruebaTecnicaCarsales';
  miArreglo: any[] = [];
  nombre: string = '';
  

  constructor(private service: RickAndMortyService) {

  }

  ngOnInit(){
      this.listaEpisodios();
  }

  listaEpisodios(){
    this.service.getEpisodios().subscribe(resp=> {
   
      this.miArreglo = resp.results;
      console.log(this.miArreglo);
    })
  }

  buscarPorNombre(){
    this.nombre = this.nombre.trim();
    if(this.nombre != "" ){
      this.miArreglo = this.miArreglo.filter((arr)=> arr.name.toLowerCase().includes(this.nombre.toLowerCase()));
    }else{
      this.listaEpisodios();
    }

     
  }
}
