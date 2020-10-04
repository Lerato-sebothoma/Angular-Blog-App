import { MyBlogService } from './../my-blog.service';
import { BlogModel } from './../../blog.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogList: BlogModel[] = [];

  subBlogChanged: Subscription;
  constructor(private service: MyBlogService) { }

     ngOnInit(): void {
      this.subBlogChanged = this.service.blogChanged.subscribe((blogs) => {
        this.blogList = blogs;
      });
      this.service.getAllBlogs().subscribe(
        (blogs: BlogModel[]) => {
        this.blogList = blogs;
        },
        () => {
        }
  
      );
    }
    ngOnDestroy() {
      if (this.subBlogChanged) {
        this.subBlogChanged.unsubscribe();
      }
    }
}
