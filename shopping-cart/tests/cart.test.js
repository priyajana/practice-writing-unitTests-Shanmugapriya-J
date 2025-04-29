const {addItem,removeItem, getTotalItems} = require('../cart.js');

// Initialize a cart object
const cart = {};

// Test cases for addItem 
// Positive cases
describe("addItem", function() {
                test("should return a custom message when name is specified",
                function() {
                    expect(addItem(cart,'Tomatoes',3 )).toBe('3 quantities of Item Tomatoes added successfully');
                });
                // Negative cases
                test("should return a custom error message when quantity is less than or equal to zero",
                    function() {
                        expect(addItem(cart,'Tomatoes',-1)).toBe('Invalid Quantity specified!');
                    });
                //Edge cases
                test("should return a custom error message item name is empty",
                    function() {
                        expect(addItem(cart,'',0)).toBe('Invalid Quantity specified!');
                    });
});
// Test cases for removeItem 
// Positive cases
describe("removeItem", function() {
                test("should return a custom message when item is removed from the cart",
                    function() {
                        expect(removeItem(cart,'Tomatoes')).toBe('Item Tomatoes is removed from the cart');
                    });
                // Negative cases
                test("should return a custom error message when removing an item not in the cart",
                    function() {
                        expect(removeItem(cart,'Onions')).toBe('Item is unavailable in the cart!');
                    });
});
// Test cases for getTotalitems 
// Positive cases
describe("getTotalItems", function() {
                test("should return a custom message total number of items",
                    function() {
                        expect(getTotalItems({'Tomatoes':4, 'Apples':6})).toBe('The total no of items in the cart are : 10');
                    });

});






