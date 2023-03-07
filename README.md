



> # Shopping App Schema Design

## User Story

As a shoping app customer, I want to be able to view the products, order products, add review to products and add product to cart.


## Requirements Analysis

### Entities:

-   Products: A  list of products on the shopping app, each with a name, description, price, and category.
-   Customers: A customer has a unique identifier, name, email, phone number ,and password.
-   Orders: An order has a unique identifier, the customer who placed it, a list of items, and the total amount.
- Carts: The cart has a unique identifer, it contains the userid, the products id and the quantity of the product added to cart.
- Review: This entity stores the the customers review of products

### Relationships:

-   A customer can view the menu and place an order.
-   An order can contain multiple items.
- 

## NoSQL Schema Design

Based on the requirements analysis, the following schema can be designed:

### Products Collection:

```
{
   _id: ObjectId,
   name: string,
   description: string,
   price: number,
   imageUrl: string,
   categories: [string]
}

```

### Customers Collection:

```
{
   _id: ObjectId,
   name: string,
   email: string,
   phone: string,
   address: string,
   password: string,
   orders: [
    {
	    orderId: string,
	    date: date
	    total: number,
	    status: string
    }
   ],
   cart: [
   {
	   productId: string,
	   quantity: number,
   }
   ]
}

```

### Orders Collection:

```
{
   _id: ObjectId,
   customerId: ObjectId,
   products: [
     {
        productId: string,
        quantity: number
     }
   ],
   totalAmount: number,
   status: string,
   orderDate: date,
   address: string
}
```
### Reviews Collection:
```
{
   _id: ObjectId,
   productId: string,
   userId: string,
   rating: number,
   comment: string
}
```


### API Endpoints

``` 
 Products Endpoints

-   GET /products : Get a list of all products in the database
-   GET /products/:id : Get details of a specific product by ID
-   POST /products : Add a new product to the database
-   PUT /products/:id : Update an existing product by ID
-   DELETE /products/:id : Delete a product by ID

 Customers Endpoints

-   GET /customers : Get a list of all customers in the database
-   GET /customers/:id : Get details of a specific customer by ID
-   POST /customers : Add a new customer to the database
-   PUT /customers/:id : Update an existing customer by ID
-   DELETE /customers/:id : Delete a customer by ID

 Orders Endpoints

-   GET /orders : Get a list of all orders in the database
-   GET /orders/:id : Get details of a specific order by ID
-   POST /orders : Add a new order to the database
-   PUT /orders/:id : Update an existing order by ID
-   DELETE /orders/:id : Delete an order by ID

 Cart Endpoints

-   GET /cart/:customerId : Get the cart items for a specific customer
-   POST /cart : Add a new item to the cart for a specific customer
-   PUT /cart/:id : Update an existing item in the cart by ID
-   DELETE /cart/:id : Remove an item from the cart by ID

 Reviews Endpoints

-   GET /reviews/:productId : Get all reviews for a specific product
-   POST /reviews : Add a new review for a specific product
-   PUT /reviews/:id : Update an existing review by ID
-   DELETE /reviews/:id : Remove a review by ID
```
