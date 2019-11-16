import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BookService } from './book/book.service';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book/bookList.component';
import { PageNotFoundComponent } from './others/pageNotFound.component';
import { HomeComponent } from './book/home.component';
import { SeanceComponent } from './seance/seance.component';
import { TimeTableComponent } from './seance/timeTable.component';
import { SeanceService } from './seance/seance.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'books', component: BookListComponent },
  { path: 'addBook', component: BookComponent },
  { path: 'addSeance', component: SeanceComponent },
  { path: 'timeTable', component: TimeTableComponent},

 

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, BookComponent, BookListComponent, HomeComponent, PageNotFoundComponent, TimeTableComponent, SeanceComponent,

  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,  RouterModule.forRoot(appRoutes)
  ],
  providers: [BookService ,SeanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
