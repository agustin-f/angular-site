import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { PaginaBlogComponent } from './pagina-blog/pagina-blog.component';

const routes: Routes = [
  {path: '', redirectTo: 'home' , pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'blog', component: PaginaBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
