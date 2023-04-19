//##################################.
//Export Modules
const express = require("express");
const app = express();
const { products } = require("./JOHN/03-Express/data.js");

//##################################.
//MiddleWARES
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "osman") {
    req.user = { id: 01, name: "Osman" };
    next();
  } else {
    res.status(401).send("unauthorized");
  }
};

//##############################
// app.use

app.use([authorize, logger]);

//##################################.
//Route home

app.get("/", (req, res) => {
  res.status(200).send("home page");
});

//##################################
//Route about

app.get("/about", (req, res) => {
  res.status(200).send("about page baby");
});

//##################################
//Route concise products
//>>>>to get concise products I should map over a new array with required infos.
app.get("/api/products", (req, res) => {
  const conciseProducts = products.map((product) => {
    const { id, name, price } = product;
    return { id, name, price };
  });
  res.status(200).json(conciseProducts);
});

//##################################
//Route only one product

app.get("/api/products/:ProductId", (req, res) => {
  const { ProductId } = req.params;

  const paramProduct = products.find((product) => {
    return product.id === Number(ProductId);
  });

  if (!paramProduct) {
    res.status(404).send("not found");
  } else {
    res.json(paramProduct);
  }
});

//##################################
//Route query parameters

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;

  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((sortedProduct) => {
      return sortedProduct.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  res.status(200).json(sortedProducts);
});

//##################################
//Listen to the server for reqs and res

app.listen(5000, () => {
  console.log("listening");
});
