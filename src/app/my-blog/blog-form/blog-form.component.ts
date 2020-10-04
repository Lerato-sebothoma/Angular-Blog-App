import { MyBlogService } from './../my-blog.service';
import { BlogModel } from './../../blog.model';
import { Subscription } from 'rxjs';
import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  id: number;
  blog: BlogModel = new BlogModel();
  subBlogId: Subscription;
  addNew: boolean = true;

  constructor(
    private service: MyBlogService,
    private route: ActivatedRoute,
    private router: Router) 
  { }

  ngOnInit(): void {
    this.subBlogId = this.route.paramMap.subscribe((map) => {
     if (map.get('id')) {
       this.id = +map.get('id');
       this.service.getBlog(this.id).subscribe(
         (blog) => {
           this.blog = blog;
           this.addNew = false;
         },
         () => {
         }
       );
       
     }
  });
  }
  onSubmit(){
    if (this.addNew) {
      this.service.addBlog(this.blog).subscribe(
        (post) => {
          this.router.navigate(['/myblog'])
          this.blog = new BlogModel(); 
        },
        () => {
        } 
      );   
    } else {
      this.service.updateBlog(this.id, this.blog).subscribe(
        () => {
          this.router.navigate(['/myblog'])
          this.blog = new BlogModel(); 
        },
        () => {
        });
      
    }

  }
}



