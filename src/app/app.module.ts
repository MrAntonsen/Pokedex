import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { PokemonListComponent } from "./components/pokemon/pokemon-list/pokemon-list.component";
import { PokemonListItemComponent } from "./components/pokemon/pokemon-list-item/pokemon-list-item.component";
import { PokemonDetailsComponent } from "./components/pokemon/pokemon-details/pokemon-details.component";
import { PokemonProfileComponent } from './components/pokemon/pokemon-profile/pokemon-profile.component';
import { PokemonStatsComponent } from './components/pokemon/pokemon-stats/pokemon-stats.component';
import { PokemonMovesComponent } from './components/pokemon/pokemon-moves/pokemon-moves.component';

const appRoutes: Routes = [
  { path: "", component: PokemonListComponent },
  { path: "details", component: PokemonDetailsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonListItemComponent,
    PokemonDetailsComponent,
    PokemonProfileComponent,
    PokemonStatsComponent,
    PokemonMovesComponent
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
