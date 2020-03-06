import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  pokemons: object[] = [];
  pokemon = new BehaviorSubject({});

  constructor(private http: HttpClient) {}

  getPokemons() {
    for (let i = 1; i < 152; i++) {
      let response = this.http
        .get(`http://pokeapi.co/api/v2/pokemon/${i}`)
        .subscribe(res => {
          this.pokemons.push(res);
          this.pokemons.sort((pok1: any, pok2: any) =>
            pok1.id > pok2.id ? 1 : -1
          );
        });
    }
    return this.pokemons;
  }
}
