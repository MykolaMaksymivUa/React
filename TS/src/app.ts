
enum Category {
  Javascript,
  HTML,
  CSS,
  Angular
}

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  pages?: number;
  markDamaged?: (reason: string) => string; 
}

function getAllBooks(): readonly Book[] {
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

function getBookTitlesByCategory(category: Category = Category.Javascript): string[] {
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

function getBookByID (id: number): Book | undefined {
  const books = getAllBooks();

  return books.find(book => book.id === id);
}

function createCustomerID (name: string, id: number): string {
  return `${id}: ${name}`;
}

function createCustomer(name: string, age?: number, city?: string): void {
  console.log(`Customer name: ${name}`);
  
  if (age) {
    console.log(`Age: ${age}`);
  }

  if (city) {
    console.log(`City: ${city}`);
  }
}

function checkoutBooks (customer: string, ...booksIDs: number[]): string[] {
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

function getTitles (author: string): string[];
function getTitles (available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: any[]): string[] {
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

function printBook (book: Book): void {
  console.log(`${book.title} by ${book.author}`);
}

// function assertStringValue (val: any): asserts val is string {
//   if (typeof val !== 'string') {
//     throw new Error('Value should have been a string')
//   }
// }
// Task 03.01
// console.log(getBookByID(2));

// //Task 03.02
// let myID: string = createCustomerID('Mykola', 18);
// console.log(myID);

// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${id}: ${name}`;
// idGenerator = createCustomerID
// myID = idGenerator('Anr', 12);

// createCustomer('Mykola');

// const titles = getBookTitlesByCategory();
// console.log(titles);

// const gettedTitles = getTitles(1, true);
// console.log(gettedTitles);

//Task 04.01
const myBook: Book = {
  id: 5,
  title: 'Colors, Backgrounds, and Gradients',
  author: 'Eric A. Meyer',
  available: true,
  category: Category.CSS,
  markDamaged: (reason: string) => `Damaged: ${reason}`,
}

printBook(myBook);