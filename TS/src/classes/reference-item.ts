export abstract class ReferenceItem {
  private _publisher: string;
  static department: string = 'Default param';

  constructor(public title: string, protected year: number) {
    console.log('New instance of class...');
  }

  printItem (): void {
    console.log(`${this.title} was published in ${this.year}`);
    console.log(`Department: ${ReferenceItem.department}`);
  }

  set publisher (newPublisher: string) {
    this._publisher = newPublisher;
  }

  get publisher (): string {
    return this._publisher.toUpperCase();
  }

  abstract printCitation (): void;
}