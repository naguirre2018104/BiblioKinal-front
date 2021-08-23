import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksReviewsComponent } from './components/books-reviews/books-reviews.component';
import { BooksComponent } from './components/books/books.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "users", component: UsersComponent},
  {path: "books", component: BooksComponent},
  {path: "reviews", component: ReviewsComponent},
  {path: "bookreview", component: BooksReviewsComponent},
  {path: "history", component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
