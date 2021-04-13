import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from './product/list/list.component';
import {CreateComponent} from './product/create/create.component';
import {UpdateComponent} from './product/update/update.component';
import {HomePageComponent} from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
