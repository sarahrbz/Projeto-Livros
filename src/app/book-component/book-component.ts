import { Component } from '@angular/core';
import { Book } from '../book';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-component',
  standalone: false,
  templateUrl: './book-component.html',
  styleUrl: './book-component.css',
})
export class BookComponent {
  books: Book[] = [];
  formGroupBook: FormGroup;

   constructor(private formBuilder: FormBuilder) {

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
    console.log(this.formGroupBook.value);
  this.books.push(this.formGroupBook.value);
  this.formGroupBook.reset({
    public: []
  });
  }
}

