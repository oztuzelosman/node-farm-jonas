const express = require("express");
const app = express();
const { products } = require("./JOHN/03-Express/data.js");

//##################################

app.get("/", (req, res) => {
  res.status(200).send("HOME");
});

//##################################

app.get("/about", (req, res) => {
  res.status(200).send("ABOUT");
});

//##################################

app.get("/api/products", (req, res) => {
  const consciseProducts = products.map((product) => {
    const { id, name, price } = product;
    return { id, name, price };
  });

  res.json(consciseProducts);
});

//##################################

app.get("/api/products/:ProductId", (req, res) => {
  const { ProductId } = req.params;
  //res.send(ProductId);

  const singleProduct = products.find((product) => {
    return product.id === Number(ProductId);
  });

  if (!singleProduct) {
    res.status(404).send("not found");
  } else {
    res.json(singleProduct);
  }
});

//##################################
app.get("api/v1/query", (req, res) => {
  const [search, limit] = req.query;

  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((sortedProduct) => {
      return sortedProduct.name.startsWith(search);
    });
  }
});
//##################################
app.listen(8080, () => {
  console.log("listening on port 8080");
});
