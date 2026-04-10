import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book-component/book-component';
import { HomeComponent } from './home-component/home-component';
import { ClientComponent } from './client-component/client-component';

const routes: Routes = [
  {path: '',        component: HomeComponent},
{path: 'book', component: BookComponent},
{path: 'client',  component: ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
