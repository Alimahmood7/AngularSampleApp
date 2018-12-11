import { AppError } from './app-error';
import { CoursesService } from './courses.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { HttpModule } from '@angular/http';
import { CoursesComponent } from './courses/courses.component';
import { ErrorHandler } from "@angular/core";
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    FavouriteComponent,
    CoursesComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: 
  [
    CoursesService,
    {provide:ErrorHandler,useClass:AppError}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
