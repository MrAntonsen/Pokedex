import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../pokemon.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-pokemon-profile",
  templateUrl: "./pokemon-profile.component.html",
  styleUrls: ["./pokemon-profile.component.css"]
})
export class PokemonProfileComponent implements OnInit {
  constructor(private pokeService: PokemonService, private router: Router) {}
  pokemon: object;
  ngOnInit() {
    this.pokeService.pokemon.subscribe(pokemon => {
      this.pokemon = pokemon;
      console.log(this.pokemon);
    });
  }
}
