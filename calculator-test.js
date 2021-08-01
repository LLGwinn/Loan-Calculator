describe('input error tests', function() {

    it('should handle <=0 values correctly', function () {
        // How do you test for alerts?
    });

    it('should handle non-number entries correctly', function() {
        // How do you test for alerts?
    });
})

describe('calculateMonthlyPmt() tests', function() {

    it('should calculate the monthly rate correctly', function () {
        expect(
            calculateMonthlyPayment( 
                { amount: 10000,
                  years: 5,
                  rate: 7.5 }
            )).toEqual('$200.38');
    });

    it('should handle zero interest rate correctly', function () {
        expect(
            calculateMonthlyPayment( 
                { amount: 10000,
                 years: 5,
                 rate: 0 }
            )).toEqual('$166.67');
    });

})

it("should return a result with 2 decimal places", function() {
    expect(
        calculateMonthlyPayment( 
            { amount: 12000,
              years: 10,
              rate: 0 }
        )).toEqual('$100.00');

    expect(
         calculateMonthlyPayment( 
            { amount: 12000,
              years: 10,
              rate: 5.7575 }
        )).toEqual('$131.77');
});







