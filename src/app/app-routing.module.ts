import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroeComponent } from './paginas/heroe/heroe.component';



const routes: Routes = [
{ path: 'heroe', component: HeroeComponent },
{ path: '**', pathMatch:'full',redirectTo:'heroe' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
