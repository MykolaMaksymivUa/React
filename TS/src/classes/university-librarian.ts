import { Librarian } from "../interfaces";

export class UniversityLibrary implements Librarian  {
  name: string;
  email: string;
  department: string;

  assistCustomer (custName: string): void {
    console.log(`${this.name} is assisting ${custName}`);
  }
}