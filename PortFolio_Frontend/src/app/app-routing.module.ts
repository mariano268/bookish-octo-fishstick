import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';

const routes: Routes = [
  {path: "" , component:HomeComponent},
  {path: "login" , component:LoginComponent},
  {path: "editPersona/:id" , component: EditAcercaDeComponent},
  {path: "editExperiencia/:id" , component: EditExperienciaComponent},
  {path: "editEducacion/:id" , component: EditEducacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
