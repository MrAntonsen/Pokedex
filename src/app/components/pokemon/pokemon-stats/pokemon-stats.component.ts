import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../pokemon.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-pokemon-stats",
  templateUrl: "./pokemon-stats.component.html",
  styleUrls: ["./pokemon-stats.component.css"]
})
export class PokemonStatsComponent implements OnInit {
  constructor(private pokeService: PokemonService, private router: Router) {}
  pokemon: object;
  ngOnInit() {
    this.pokeService.pokemon.subscribe(pokemon => {
      this.pokemon = pokemon;
    });
  }
}
