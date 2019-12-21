import { ReferenceItem } from "./reference-item";

export default class Encyclopedia extends ReferenceItem {
  constructor (title: string, year: number, public edition: number) {
    super(title, year);
  }

  printItem (): void {
    super.printItem();
    console.log(`${this.edition} edition of ${this.title} was published in ${this.year}`);
  }

  printCitation () {
    console.log(`${this.title} - ${this.year}`);
  }
}
