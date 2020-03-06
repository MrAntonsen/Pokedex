import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../pokemon.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-pokemon-moves",
  templateUrl: "./pokemon-moves.component.html",
  styleUrls: ["./pokemon-moves.component.css"]
})
export class PokemonMovesComponent implements OnInit {
  constructor(private pokeService: PokemonService, private router: Router) {}
  pokemon: object;
  ngOnInit() {
    this.pokeService.pokemon.subscribe(pokemon => {
      this.pokemon = pokemon;
    });
  }
}
