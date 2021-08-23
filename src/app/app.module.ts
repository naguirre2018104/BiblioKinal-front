import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RestUserService } from './services/restUser/rest-user.service';
import { UsersComponent } from './components/users/users.component';
import { OrderByPipe } from './pipes/user/order-by.pipe';
import { BooksComponent } from './components/books/books.component';
import { SearchPipe } from './pipes/book/search.pipe';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { BooksReviewsComponent } from './components/books-reviews/books-reviews.component';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    LoginComponent,
    UsersComponent,
    OrderByPipe,
    BooksComponent,
    SearchPipe,
    ReviewsComponent,
    BooksReviewsComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RestUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
