import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokelistComponent } from './pokelist/pokelist.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokedetalleComponent } from './pokedetalle/pokedetalle.component';
import { ElementsModule } from '../elements/elements.module';



@NgModule({
  declarations: [
    PokelistComponent,
    PokemonComponent,
    PokedetalleComponent
  ],
  imports: [
    CommonModule,
    ElementsModule
  ],
  exports: [
    PokelistComponent
  ]
})
export class PokemonModule { }
