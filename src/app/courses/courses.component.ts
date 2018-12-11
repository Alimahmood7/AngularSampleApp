import { AppError } from './../app-error';
import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';
import { notFoundError } from '../not-found-error';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private _coursesService: CoursesService) { }
  courseList: any = [];
  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    this._coursesService.getCourses().
      subscribe((courseList) => {
        console.log(courseList);
        this.courseList = courseList;
      });
  }
  postCourse(input: any) {
    const course = {
      title: input.value
    };
    this.courseList.splice(0, 0, course);

    input.value = '';
    this._coursesService.postCourse(course).
      subscribe(courseObj => {
        console.log(courseObj);
        course['id'] = courseObj.id;
      }, (error: Response) => {
        this.courseList.splice(0, 1);
        if (error instanceof notFoundError) {
          alert('You cannot post this course');
        } else { throw error; }
      });
  }

  deletePost(id) {
    console.log('delete', id);
    this._coursesService.deletePost(JSON.stringify(id)).
      subscribe(response => {
        console.log('delete subsc');
        const index = this.courseList.findIndex(course => course.id = id);
        this.courseList.splice(index, 1);
        console.log(index);
      }, (error: Response) => {
        if (error instanceof notFoundError) {
          console.log(error);
        } else { throw error; }
      });
  }

}
