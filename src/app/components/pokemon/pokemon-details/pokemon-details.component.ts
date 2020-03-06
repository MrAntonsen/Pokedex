import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../pokemon.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-pokemon-details",
  templateUrl: "./pokemon-details.component.html",
  styleUrls: ["./pokemon-details.component.css"]
})
export class PokemonDetailsComponent implements OnInit {
  constructor(private pokeService: PokemonService, private router: Router) {}
  pokemon: object;
  ngOnInit() {
    this.pokeService.pokemon.subscribe(pokemon => {
      this.pokemon = pokemon;
      console.log(this.pokemon);
    });
  }
}
