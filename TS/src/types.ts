import {Book, Person} from './interfaces'

export type BookProps = keyof Book;
export type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;
