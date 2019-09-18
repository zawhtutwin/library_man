import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'

export interface IBook {
  title:string;
  author: string;
}

@Injectable()
export class BookService{
	constructor(){}
	getAllBooks(http:HttpClient){
		return http.get("http://localhost:3000/books",{headers: {'Content-Type': 'application/json'}});
	}
	
	searchBooks(http:HttpClient,author:string,title:string){
		return http.get("http://localhost:3000/books/search?title="+title+"&author="+author,{headers: {'Content-Type': 'application/json'}});
	}
}
