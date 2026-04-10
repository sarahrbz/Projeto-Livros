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

  getAllBooks(): Observable<Book[]>{ // Esse método vai devolver uma lista de livros, mas não imediatamente
    return this.http.get<Book[]>(this.apiUrl); // Faz uma requisição GET na API e retorna uma lista de livros como Observable
    //retorne esse metodo http "pegar", desta url
  }

  //parametro 'book' -> um objeto do tipo Book
  save(book: Book): Observable<Book>{
    return this.http.post<Book>(this.apiUrl, book);
  }

  // HTTP DELETE: http://localhost:3000/books/6
  delete(book: Book): Observable<void>{ // vai executar a ação, mas não espera nenhum dado de volta
    return this.http.delete<void>(`${this.apiUrl}/${book.id}`)
  }


}
