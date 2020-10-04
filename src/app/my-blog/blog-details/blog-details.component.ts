import { MyBlogService } from './../my-blog.service';
import { BlogModel } from './../../blog.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blog: BlogModel;
  id: number;
  subBlogId: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MyBlogService) { }

  ngOnInit(): void {
    this.subBlogId =  this.route.paramMap.subscribe((map) => {
      this.id = +map.get('id');
      this.service.getBlog(this.id).subscribe(
        (blog) => {
          this.blog = blog;
        },
        () => {
        }
      ); 
    });
  }

  delete() {
    if (window.confirm('Delete?')) {
      this.service.deleteBlog(this.blog.id).subscribe(
        () => {
          this.router.navigate(['/myblog/blog']);
        },
        () => {
        }
      );

    }
  }

  update(){
    this.router.navigate(["/myblog", this.id, "update"]);
  };

  ngOnDestroy() {
    if (this.subBlogId) {
      this.subBlogId.unsubscribe()
    }
  }
}


