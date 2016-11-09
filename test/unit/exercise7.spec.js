(function ()
{
    'use strict';

    describe('exercise7', function ()
    {
        var exercise7 = window.exercise7;

        describe('isPrimeNumber', function ()
        {
            it('should return true when number is prime number', function ()
            {
                expect(true).toEqual(true);
            });
            it('should return false when number is not prime number', function ()
            {
                expect(exercise7.isPrimeNumber(21)).toEqual(false);
                expect(exercise7.isPrimeNumber(14)).toEqual(false);
                expect(exercise7.isPrimeNumber(10)).toEqual(false);
            });
            describe('and nested describe', function () 
            {
                it('should success', function ()
                {
                    expect(true).toEqual(true);
                });
                xit('should skip', function ()
                {
                    expect(true).toEqual(true);
                });
            });
        });
    });
})();
