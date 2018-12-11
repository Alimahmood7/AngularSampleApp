import { notFoundError } from './not-found-error';
import { AppError } from './app-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CoursesService {
  private _url: string;
  private post;
  constructor(private _http: Http) {
    this._url = 'https://jsonplaceholder.typicode.com/posts';
  }
  getCourses() {
    return this._http.get(this._url)
      .map(response => response.json())
      .catch(this.postErrorHandler);
  }

  private postErrorHandler(error: Response) {
    if (error.status === 404) {
      return Observable.throw(new notFoundError(error));
    }
    return Observable.throw(new AppError());
  }

  postCourse(data: any) {
    console.log(data);
    // return Observable.throw(new AppError());
    return this._http.post(this._url, JSON.stringify(data))
      .map(response => {
        console.log(response.json());
        this.post = new BehaviorSubject<string>('posts');
        console.log(this.post);
        this.post.next('ssssss');
        console.log(this.post);
        return response.json();
      })
      .catch(this.postErrorHandler);

  }

  deletePost(id) {
    const target = {
      id: id
    };
    console.log('target', target);
    return this._http.patch(this._url + '/' + id + '', target)
      .map(response => response.json())
      .catch(this.postErrorHandler);
  }

}
