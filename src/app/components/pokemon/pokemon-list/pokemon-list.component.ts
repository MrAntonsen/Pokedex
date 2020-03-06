import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../pokemon.service";
@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.css"]
})
export class PokemonListComponent implements OnInit {
  pokemons: any[];
  constructor(private pokeService: PokemonService) {}

  ngOnInit() {
    this.pokeService.getPokemons();
    this.pokemons = this.pokeService.pokemons;
  }
}
