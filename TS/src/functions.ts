import { Book } from "./interfaces";
import { Category } from "./enums";
import { BookOrUndefined, BookProps } from "./types";

export function getAllBooks(): readonly Book[] {
  const books: readonly Book[] = <const>[
    {
      id: 1,
      title: 'Refactoring JavaScript', 
      author: 'Evan Burchard', 
      available: true,
      category: Category.Javascript,
    },
    {
      id: 2,
      title: 'JavaScript Testing', 
      author: 'Liang Yuxian Eugene', 
      available: false,
      category: Category.Javascript,
    },
    {
      id: 3,
      title: 'CSS Secrets', 
      author: 'Lea Verou', 
      available: true,
      category: Category.CSS,
    },
    {
      id: 4,
      title: 'Mastering JavaScript Object-Oriented Programming', 
      author: 'Andrea Chiarelli', 
      available: true,
      category: Category.Javascript,
    }
  ];

  return books;
}

export function getBookTitlesByCategory(category: Category = Category.Javascript): string[] {
  const books = getAllBooks();
  const titles: string[] = [];

  for (const book of books) {
    const anyBook = book as any;

    if (anyBook.category = category) {
      titles.push(anyBook.title);
    }
  }

  return titles;
}

export function getBookByID (id: number): BookOrUndefined {
  const books = getAllBooks();

  return books.find(book => book.id === id);
}

export function createCustomerID (name: string, id: number): string {
  return `${id}: ${name}`;
}

export function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Customer name: ${name}`);
  
  if (age) {
    console.log(`Age: ${age}`);
  }

  if (city) {
    console.log(`City: ${city}`);
  }
}

export function checkoutBooks (customer: string, ...booksIDs: number[]): string[] {
  console.log(`Checking out books for ${customer}`);

  const titles: string[] = [];
  for (const id of booksIDs) {
    const book = getBookByID(id);
    if (book && book.available) {
      titles.push(book.title);
    }
  }

  return titles;
};

export function getTitles (author: string): string[];
export function getTitles (available: boolean): string[];
export function getTitles(id: number, available: boolean): string[];
export function getTitles(...args: any[]): string[] {
  const books = getAllBooks();
  const length = args.length;

  if (!length) {
    return [];
  }

  if (length === 1) {
    const arg = args[0];

    if (typeof arg === 'boolean') {
      return books.filter(book => book.available === arg).map(book => book.title);
    }

    if (typeof arg === 'string') {
      return books.filter(book => book.author === arg).map(book => book.title);
    }
  } else if (length === 2) {
    const [id, available] = args;
    return books.filter(book => book.id === id && book.available === available)
    .map(book => book.title);
  }

}

export function printBook (book: Book): void {
  console.log(`${book.title} by ${book.author}`);
}

export function getBookProp (book: Book, prop: BookProps): any {
  const propType = book[prop];
  if(typeof propType === 'function') {
    return (book[prop] as Function).name
  } else {
    return book[prop];
  }
}

function assertStringValue (val: any): asserts val is string {
  if (typeof val !== 'string') {
    throw new Error('Value should have been a string')
  }
}