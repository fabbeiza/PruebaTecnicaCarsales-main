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
  

  constructor(private service: RickAndMortyService) {

  }

  ngOnInit(){
      this.service.getEpisodios().subscribe(resp=> {
   
        this.miArreglo = resp.results;
        console.log(this.miArreglo);
      })
  }
}
