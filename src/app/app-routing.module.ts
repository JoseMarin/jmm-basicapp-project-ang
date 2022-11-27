import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PokelistComponent } from './pokemon/pokelist/pokelist.component';
import { PokemonComponent } from './pokemon/pokemon/pokemon.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'home', component: HomeComponent },
  {path:'login', component: LoginComponent },
  {path:'register', component: RegisterComponent },
  {path:'about', component: AboutComponent },
  {path:'pokemon', component: PokelistComponent },
  {path:'', component: HomeComponent },
  {path:'**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
