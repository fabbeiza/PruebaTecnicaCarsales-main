import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  urlApi="https://rickandmortyapi.com/api/episode"

  constructor(private http: HttpClient) {


  }

  getEpisodios(): Observable<any> {
    return this.http.get(this.urlApi);
}

}
