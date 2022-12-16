# shopping-cart-challenge

## Setup instructions

> To run the Development server
1. Open the commandline in your local machine
2. Clone repo to local machine
```
git clone https://github.com/JerinAbraham2/shopping-cart-challenge.git
```
2. Change directory to cloned folder
```
cd shopping-cart-challenge
```
3. Type in the commandLine the command "npm start"
```
npm start
```

> To run hosted version

- to be added

## Technologies
I decided to use react for this project, because since it is a user interface, I felt the framework would work well with a single page ui, I also used useId (I believe is a built-in react library) for making the unique id for the products. I also used CSS modules, because I read they were efficient (not sure). 
- React
- JavaScript
- CSS
- JSX
- useEffect (React hook)
- useState (React hook)
- CSS Modules
- useId (React library for unique ID)

## Requirements

### Have a prepopulated products

> Pre-populated products have been added using an array of objects containing information about each item, useState was also used for storing the information

### Products should have atleast product image, name and price

> Information about a product is stored inside an array called hardCodedProducts, in the array contains objects for each product and each object has properties for name, price and an image, which imported from the assets folder

### Products should be displayed when the page loads

> Products are rendered when the page loads on the App component using the .map function on the products array for each product, it passes the products information to another component called Product which will render each of the product's ui to the screen

### Add to cart button should add to shopping card

> an onClick attribute is added to the Add to cart button in the Product component, which has a value of a callback function that executes a function passed from the parent component App called handleAddToCart

### The shopping cart lists all the products and displays the total price

> The shopping cart lists all the products dynamically as they are added, and display the total price, this is done through a component called ShoppingTable, it adds items based on what is added to the cart useState, which is called when the add to cart button is pressed on the Product component, the total price is calculated inside the component ShoppingTable using the react hook useEffect, so that every time the cart changes the total price is changed to the sum of the price of each item multiplied by its quantity

## Additional requirements

### delete items

> Delete cart items is done inside the ShoppingTable Component and the parent App component, when the remove button is clicked it calls a function in the parent App component called removeItem(id), that removes the item from the cart based on the id and also resets its quantity to 1 (because for some reason, when the item is added back without resetting its quantity it has the original quantity (possible bug))

### enter quantitity

> Incrementing the quantity is available inside the inside the shopping cart table in the ShoppingTable component, each button "+" and "-" calls a function called updateCartQty inside the parent component App, it passes two arguments, the product to update the quantity on, and a true or false value, if its incrementing or decrementing the quantity
