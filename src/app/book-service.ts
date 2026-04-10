import { Injectable } from '@angular/core';
import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  apiUrl = "http://localhost:3000/books"

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.apiUrl);
  }

  save(book: Book): Observable<Book>{
    return this.http.post<Book>(this.apiUrl, book);
  }


}
