import { Component, OnInit, Input } from "@angular/core";
import { PokemonService } from "../pokemon.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-pokemon-list-item",
  templateUrl: "./pokemon-list-item.component.html",
  styleUrls: ["./pokemon-list-item.component.css"]
})
export class PokemonListItemComponent implements OnInit {
  @Input() pokemon: {};

  constructor(private pokeService: PokemonService, private router: Router) {}

  ngOnInit() {}
  viewDetailsClick() {
    this.pokeService.pokemon.next(this.pokemon);
    this.router.navigate(["/details"]);
  }
}
