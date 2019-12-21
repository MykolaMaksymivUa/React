import { ReferenceItem, UniversityLibrary, RefBook} from "./classes";
import { PersonBook } from "./types";
import { Category } from "./enums";
import {Book, DamageLogger, Person, Author, Librarian} from './interfaces'
import { getAllBooks } from "./functions";


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
// const myBook: Book = {
//   id: 5,
//   title: 'Colors, Backgrounds, and Gradients',
//   author: 'Eric A. Meyer',
//   available: true,
//   category: Category.CSS,
//   markDamaged: (reason: string) => `Damaged: ${reason}`,
// }

// printBook(myBook);
//Task 04.02
// let logDamage: DamageLogger;
// logDamage = (reason: string) => console.log(`Damage logger: ${reason}`);
// logDamage('JS kill him')

//Task 04.03
// const favouriteAuthor: Author = {
//   name: 'Mykola',
//   email: 'mykolamaksymiv@gmail.com',
//   numBooksPublished: 142
// }

// const favLibrarian: Librarian = {
//   name: 'Anton',
//   email: 'bla@rm.com',
//   department: 'Lviv',
//   assistCustomer: (name: string) => console.log(`Hello from ${name}`),
// }

//Task 04.05
// console.log(getBookProp(getAllBooks()[0], 'title'));
// console.log(getBookProp(getAllBooks()[0], 'markDamaged'));

// Task 05.01 
// const ref = new ReferenceItem('TS lectures', 2019);
// ref.publisher = 'Mykola Maksymiv';
// console.log(ref.publisher);

//Task 05.02
// const refBook: Encyclopedia = new Encyclopedia('TS from scratch', 2019, 1);
// refBook.printItem();
// refBook.printCitation();

//Task 05.04
// const favLibrarian: Librarian = new UniversityLibrary();
// favLibrarian.name = 'Anton';
// favLibrarian.assistCustomer('Mykola');

//Task 05.05
// const personBook: PersonBook = {
//   name: 'Mykola',
//   email: 'mykolamaksymivua@gmail.com',
//   id: 1,
//   title: 'TS from Scratch',
//   author: 'Stranger',
//   category: Category.Javascript,
//   available: true,
// }
// console.log(personBook);

//Task 6.03
// const refBook: RefBook = new RefBook('TS from scratch', 2019, 1);
// refBook.printItem();
// refBook.printCitation();

//Task 06.05
import('./classes').then(module => {
  const reader = new module.Reader();
  reader.name = 'Mykola';
  console.log(reader);
  reader.take(getAllBooks()[0]);
})