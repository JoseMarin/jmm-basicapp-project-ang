import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PokelistComponent } from './pokemon/pokelist/pokelist.component';
import { PokemonComponent } from './pokemon/pokemon/pokemon.component';
import { RegisterComponent } from './register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {path:'home', component: HomeComponent, ...canActivate(() => redirectUnauthorizedTo(['/login']))},
  {path:'login', component: LoginComponent },
  {path:'register', component: RegisterComponent },
  {path:'about', component: AboutComponent },
  {path:'pokemon', component: PokelistComponent },
  {path:'', pathMatch: 'full', redirectTo: '/home' },
  {path:'**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
