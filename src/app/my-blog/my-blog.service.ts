import { BlogModel } from './../blog.model';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http'
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyBlogService {
  blogChanged: Subject<BlogModel[]> = new Subject<BlogModel[]>();
  private Url = 'http://localhost:3000/myblog'
  blogs: BlogModel[] = [];

  constructor(private http: HttpClient) {  }

  getAllBlogs(): Observable<BlogModel[]>{
  const authToken = 'abc12345';
    const myHeaders = new HttpHeaders({ 'my-auth-token': authToken });
    const myParams = new HttpParams().set('my-auth-token', authToken);

    return this.http.get<BlogModel[]>(
      this.Url,
      {
        headers: myHeaders,
        params: myParams
      }
    )
    .pipe(
      tap((blogs: BlogModel[]) => {
        this.blogs = [...blogs];
      })
    );
  }

  addBlog(newBlog: BlogModel): Observable<BlogModel> {
    return this.http.post<BlogModel>(this.Url, newBlog);
  }

  getBlog(blogId: number): Observable<BlogModel> {
    return this.http.get<BlogModel>(this.Url + "/" + blogId);
  }

  
  deleteBlog(id: number): Observable<any> {
    return this.http.delete(`${this.Url}/${id}`)
      .pipe(
        tap(() => {
          const index = this.blogs.findIndex(blog => {
            return blog.id === id;
          });
          this.blogs.splice(index, 1);
          this.blogChanged.next([...this.blogs]);
        })
      );
  }
  updateBlog(id: number, blog: BlogModel) {
    // return this.http.put(this.Url,id)
    return this.http.put(`${this.Url}/${id}`, blog)
  }
}


