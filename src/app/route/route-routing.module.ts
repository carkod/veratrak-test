import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { DetailComponent } from '../detail/detail.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
