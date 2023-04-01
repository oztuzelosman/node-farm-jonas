const express = require("express");
const app = express();
const { products } = require("./JOHN/03-Express/data.js");

//Routing to the home page and add link to the products
app.get("/", (req, res) => {
  res
    .status(200)
    .send("<h1>Home Page</h1><a href='/api/products'>Products</a>");
});

//Routing to the api/products

app.get("/api/products", (req, res) => {
  //Mapping through products to get just id, name, and price
  const conciseProducts = products.map((product) => {
    const { id, name, price } = product;
    return { id, name, price };
  });
  res.json(conciseProducts);
});

//Adding params to /api/products

app.get("/api/products/:ProductID", (req, res) => {
  //Getting product id that has requested on url
  const { ProductID } = req.params;
  //Defining single product as a result of find method which finds the item
  //that has the same id with requested ProductID
  const singleProduct = products.find((product) => {
    return product.id === Number(ProductID);
  });
  //Acting whether single product exists or not
  if (!singleProduct) {
    return res.status(404).send("Product does not exist");
  } else {
    return res.json(singleProduct);
  }
});

//Apply queries to the url

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;

  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
    //
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    //res.status(200).send("no products matched your search");
    return res.status(200).json({ sucess: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

//Getting requests from localhost:5000
app.listen(5000, () => {
  console.log("listening on port 5000");
});

/* 
When testing the code, you should add the question mark after the base URL and before the query parameters.
For example, if your base URL is "http://localhost:3000/api/v1/query" and 
you want to test the code with a search parameter of "phone" and a limit parameter of 10,
you would add the query parameters like this: "http://localhost:3000/api/v1/query?search=phone&limit=10". 
 */
