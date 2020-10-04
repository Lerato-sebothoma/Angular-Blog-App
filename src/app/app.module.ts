import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './my-blog/header/header.component';
import { BlogFormComponent } from './my-blog/blog-form/blog-form.component';
import { BlogDetailsComponent } from './my-blog/blog-details/blog-details.component';
import { BlogListComponent } from './my-blog/blog-list/blog-list.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyBlogComponent,
    AboutComponent,
    HeaderComponent,
    BlogFormComponent,
    BlogDetailsComponent,
    BlogListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
