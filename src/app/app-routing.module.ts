import { BlogListComponent } from './my-blog/blog-list/blog-list.component';
import { BlogFormComponent } from './my-blog/blog-form/blog-form.component';
import { BlogDetailsComponent } from './my-blog/blog-details/blog-details.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { 
    path:'myblog', component: MyBlogComponent, children: [
      { path: '', redirectTo: 'blog', pathMatch: 'full'},
      { path: 'blog', component: BlogListComponent},
      { path: 'addblog', component: BlogFormComponent},
      { path: ':id/update', component: BlogFormComponent},
      { path: ':id', component: BlogDetailsComponent}
    ],
  },
    { path: 'about', component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
