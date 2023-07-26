# eCommerceAPI Using Nodejs and MongoDB
eCommerceAPI is a RESTful API built with Node.js, Express, and MongoDB. It provides the backend functionality for an eCommerce web application, allowing admin to create products, update their quantity, browse and delete them.




## 4(api's) Features
* To create a product -> POST:  http://localhost:8080/products/create
* To view all products -> GET:  http://localhost:8080/products
* To update a product's quantity -> POST:  http://localhost:8080/products/id/quant?quantity=value
   ``` (id represents the id of the product, value is the desired quantity)```
* To delete a product -> DELETE:  http://localhost:8080//products/:id
