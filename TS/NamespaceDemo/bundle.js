var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            var FEE_PERCENT = 0.25;
            return daysLate * FEE_PERCENT;
        }
        Fees.calculateLateFee = calculateLateFee;
        function maxBooksAllowed(age) {
            if (age < 12) {
                return 3;
            }
            else {
                return 10;
            }
        }
        Fees.maxBooksAllowed = maxBooksAllowed;
        function privateFunc() {
            console.log('Private func');
        }
    })(Fees = Utility.Fees || (Utility.Fees = {}));
})(Utility || (Utility = {}));
/// <reference path="utility-functions.ts" />
var util = Utility.Fees;
var res = util.calculateLateFee(10);
console.log(res);
