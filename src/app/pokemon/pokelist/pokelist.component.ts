import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css']
})
export class PokelistComponent implements OnInit {

  pokemons:any = [];
  name: string = '';

  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {
    this.getPoke();
    this.getAllPoke();
  }

  getPoke(){
    this.pokeService.getAll()
    .subscribe(
      data => {
        this.name = data.results[0].name;
        //console.log(data.results[0]);
      });
  }

  getAllPoke(){
    this.pokeService.getAll()
    .subscribe(
      data => {
        this.pokemons = data.results;
        console.log(data.results);
      });
  }


}
