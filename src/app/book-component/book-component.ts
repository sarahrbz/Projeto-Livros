import { Component, OnInit, signal } from '@angular/core';
import { Book } from '../book';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from '../book-service';

@Component({
  selector: 'app-book-component',
  standalone: false,
  templateUrl: './book-component.html',
  styleUrl: './book-component.css',
})
export class BookComponent implements OnInit {
  books = signal<Book[]>([]);
  formGroupBook: FormGroup;

   constructor(private formBuilder: FormBuilder, private service : BookService) {

    this.formGroupBook = formBuilder.group({
      id: [''],
      title: [''],
      author: [''],
      price: [''],
      type: [''],
      gender: [''],
      public: [[]]
    });
  }
  ngOnInit(): void {
    this.service.getAllBooks().subscribe(
      {
        next: json => this.books.set(json)
      }
    );
  }

  onCheck(event: any) {
  const value = event.target.value;
  const checked = event.target.checked;

  let lista = this.formGroupBook.value.public || [];

  if (checked) {
    lista.push(value);
  } else {
    lista = lista.filter((item: string) => item !== value);
  }

  this.formGroupBook.patchValue({ public: lista });
}

  save() {
    this.service.save(this.formGroupBook.value).subscribe(
      {
        next: json => {
          this.books.update(books => [...books, json]);
          this.formGroupBook.reset()
        }
      }
    )
  }

  delete(book: Book){
    this.service.delete(book).subscribe(
      {
        next: () => {
          this.books.update(books => books.filter(b => b.id !== book.id))
        }
      }
    )
  }
}

