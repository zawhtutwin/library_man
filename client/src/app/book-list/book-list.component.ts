import { Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookService } from '../services/book-service';
import { IBook } from '../services/book-service';


@NgModule({
   exports: [BookListComponent],
   declarations: [BookListComponent],
   providers: [BookService],
   imports: [CommonModule,FormsModule]
})

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})


export class BookListComponent {
  public books:  IBook[];

  constructor(private http: HttpClient,service:BookService) { 
		service.getAllBooks(http).subscribe((books:IBook[])=>{
			this.books = books;
		});
  }

}
