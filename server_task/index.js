import express from "express";

const app = express();
const PORT = 3000;


app.use(express.json());


const products = [
{
"id": 1,
"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
"price": 109.95,
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
"rating": {
"rate": 3.9,
"count": 120
}
},
{
"id": 2,
"title": "Mens Casual Premium Slim Fit T-Shirts ",
"price": 22.3,
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
"rating": {
"rate": 4.1,
"count": 259
}
},
{
"id": 3,
"title": "Cotton Jacket",
"price": 55.99,
"category": "women's clothing",
"image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
"rating": {
"rate": 4.7,
"count": 500
}
}];


app.get("/", (req, res) => {
  res.status(200).send("User API is running");
});


app.get("/all", (req, res) => {
  res.status(200).json(products);
});


app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
});


app.post("/products/:id", (req, res) => {
  const { title, price, category, image, rating } = req.body;

  if (!title || !price || !category) {
    return res.status(400).json({
      message: "Title, price and category are required"
    });
  }

  const newProduct = {
    id: products.length
      ? products[products.length - 1].id + 1
      : 1,
    title,
    price,
    category,
    image: image || "",
    rating: rating || { rate: 0, count: 0 }
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

app.get("/category/:type", (req, res) => {
  const type = req.params.type.toLowerCase();

  const filteredProducts = products.filter(
    p => p.category.toLowerCase() === type
  );

  if (filteredProducts.length === 0) {
    return res.status(404).json({
      message: "No products found in this category"
    });
  }

  res.status(200).json(filteredProducts);
});



app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.findIndex(p => p.id === id);

  if (product === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  const { title, price, category, image, rating } = req.body;
  if (!title || !price || !category) {
    return res.status(400).json({
      message: "Title, price and category are required"
    });
  }

  products[product] = { ...products[product], title, price, category, image, rating };

  res.status(200).json(products[product]);
});

app.patch("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex(p => p.id === id);
  if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
  const { title, price, category, image, rating } = req.body;
  if (!title || !price || !category) {
    return res.status(400).json({
      message: "Title, price and category are required"
    });
  }
    products[productIndex] = {  ...products[productIndex], title, price, category, image, rating };

  res.status(200).json(products[productIndex]);
});



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});