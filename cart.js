///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((x,y) => {
    return x + y.price
},0);

console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

let calcFinalPrice = (cartTotal, couponValue, tax) => {
    let totalWTaxes = (cartTotal * (tax + 1));
    let discount = (totalWTaxes * couponValue);
    let finalPrice = (totalWTaxes - discount);
        return finalPrice
}
console.log(calcFinalPrice(26.97, 0.1, .06));



//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    For a restaurant to take an online order, they will need a full name, a phone number, an email, an address and their cc information.
    firstname = 'string'
    lastname = 'string
    phoneNumber = number (I would make this a number since phone numbers are already numbers and that way a string cannot be placed in its stead, it would require a usable phone number)
    email = 'string' (for contact info)
    address = 'string' (I want to include an address incase of delivery)
    cc info = this will be another object, a credit card is needed in order to take payments
        ccName = 'string' (incase its different from customer name)
        ccNumber = number (the actual credit card number)
        expDate = number (experation date)
        cvc = number (cvc)
        ccAddress = 'string' (incase the delivery address is different than the cc address I need a space for that)
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customerObject = {
    firstName: 'George',
    lastName: 'Costanza',
    phoneNumber: 5555555555,
    email: 'believe_it_or_not@gmail.com',
    custAddress: {
        address:'1344 Queens Boulevard',
        city: 'New York',
        state: 'NY',
        zipcode: 11105,
    },
    ccInfo: {
        ccName: 'Jerry Seinfeld',
        ccNumber:1234567890123456,
        expDate: 1021,
        cvc: 123,
        ccAddress: {
            address:'129 West 81st Street, apt 5A',
            city: 'New York',
            state: 'NY',
            zipcode: 11105,
        },
    }
}