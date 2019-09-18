import { Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../services/book-service';
import { IBook } from '../services/book-service';
import {FormsModule, ReactiveFormsModule,NgForm} from '@angular/forms'

@NgModule({
   imports: [HttpClient,FormsModule,ReactiveFormsModule],
   exports: [BookSearchComponent],
   declarations: [BookSearchComponent],
   providers: [BookService],
})
@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent{
	public searchResult : IBook[];
  my_http;
  my_service;
  constructor(private service:BookService,http:HttpClient) {
  	this.my_http = http;
  	this.my_service = service;
  }
  
  handleClick(data:NgForm,event){
  	console.log(data.controls['title'].value);
  	this.my_service.searchBooks(this.my_http,data.value.author,data.value.title).subscribe((books:IBook[])=>{
			this.searchResult = books;
		});
		//event.preventDefault();
	}  

}
