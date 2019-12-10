
enum Category {
  Javascript,
  HTML,
  CSS,
  Angular
}

function getAllBooks() {
  const books = <const> [
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

function getBookByID (id: number): any {
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

// Task 03.01
console.log(getBookByID(2));

//Task 03.02
let myID: string = createCustomerID('Mykola', 18);
console.log(myID);

let idGenerator: (name: string, id: number) => string;
idGenerator = (name: string, id: number) => `${id}: ${name}`;
idGenerator = createCustomerID
myID = idGenerator('Anr', 12);

createCustomer('Mykola');

const titles = getBookTitlesByCategory();
console.log(titles);