namespace Utility {
  export namespace Fees {
    export function calculateLateFee (daysLate: number): number {
      const FEE_PERCENT = 0.25;

      return daysLate * FEE_PERCENT;
    }

    export function maxBooksAllowed (age: number): number {
      if (age < 12) {
        return 3;
      } else {
        return 10;
      }
    } 

    function privateFunc (): void {
      console.log('Private func');
    }
  }
}