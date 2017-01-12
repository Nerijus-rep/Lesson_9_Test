QUnit.module("Testing");

test("Sum Number", function() {
    equal(sumNumber(4,6), 10);
});

test("Sum Array", function() {
    equal(sumArray([2,2,2,2,2,2]), 12);
});

test("Find Smallest", function() {
    equal(findSmallest(-10,0,50,100), -10);
});

test("Convert Farenheit To Celsius", function() {
    equal(farenheitToCelsius(68), 20);
});

test("Reverses", function() {
    equal(reverse("aaa bb, c"), "c ,bb aaa");
});