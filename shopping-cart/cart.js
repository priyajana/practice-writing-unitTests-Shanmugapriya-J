


// Adds an item to the cart.
function addItem(cart, item, quantity){
    
    if(quantity <=0)
        {
            return 'Invalid Quantity specified!';
        }
    else if(item == '')
        {
            return 'Item name not specified!';
        }
    cart[item] = quantity;
    console.log(`${quantity} quantities of Item ${item} added successfully`);
    return `${quantity} quantities of Item ${item} added successfully`;

}

//Removes an item from the cart.
function removeItem(cart, item) {

    if(item in cart)
        {
            delete cart.item;
            return (`Item ${item} is removed from the cart`);
        }
    else{
        return 'Item is unavailable in the cart!';
    }
    
}

//Returns the total number of items in the cart.
function getTotalItems(cart){
    let total =  0;
    if(Object.keys(cart).length == 0){
        return 'Cart is empty';
    }
    else
    {
        for( item in cart)
            {
                total+= cart[item];
            }
        return `The total no of items in the cart are : ${total}`;
    }
    
}

module.exports = {addItem,removeItem,getTotalItems};