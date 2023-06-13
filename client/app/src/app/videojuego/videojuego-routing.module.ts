import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideojuegoIndexComponent } from './videojuego-index/videojuego-index.component';

const routes: Routes = [
  {path: "videojuego", component: VideojuegoIndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideojuegoRoutingModule { }
