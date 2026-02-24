import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(cors());

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 25,
    rating: 4.3
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 40,
    rating: 4.5
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 999,
    stock: 30,
    rating: 4.2
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    stock: 12,
    rating: 4.4
  },
  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1599,
    stock: 50,
    rating: 4.1
  }
];

app.get("/", (req, res) => {
  res.status(200).send("Product API is running");
});

app.get("/products", (req, res) => {
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

app.get("/products/category/:categoryName", (req, res) => {
  const categoryName = req.params.categoryName;
  const filteredProducts = products.filter(p => p.category === categoryName);
  res.status(200).json(filteredProducts);
});

app.post("/products", (req, res) => {
  const { name, category, price, stock, rating } = req.body;
    if (!name || !category || !price || !stock) {
    return res.status(400).json({
      message: "Name, category, price and stock are required"
    });
  }
    const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name,
    category,
    price,
    stock,
    rating: rating || 0
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

app.put("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex(p => p.id === id);
    if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
    const { name, category, price, stock, rating } = req.body;
    if (!name || !category || !price || !stock) {
    return res.status(400).json({
        message: "Name, category, price and stock are required"
    });
  }     
    const updatedProduct = {
    id,
    name,
    category,   
    price,
    stock,
    rating: rating || products[productIndex].rating
    };
    products[productIndex] = updatedProduct;
    res.status(200).json(updatedProduct);
});

app.put("/products/:id/stock", (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex(p => p.id === id);
    if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
    const { stock } = req.body;
    if (stock === undefined) {
    return res.status(400).json({
        message: "Stock is required"
    });
  }
    products[productIndex].stock = stock;
    res.status(200).json(products[productIndex]);
});

app.put("/products/:id/price", (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex(p => p.id === id);
    if (productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
    const { price } = req.body;
    if (price === undefined) {
    return res.status(400).json({
        message: "Price is required"
    });
  }
    products[productIndex].price = price;
    res.status(200).json(products[productIndex]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});