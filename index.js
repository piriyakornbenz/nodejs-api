const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// ข้อมูลตัวอย่าง
let products = [
  { id: 1, name: "Product A" },
  { id: 2, name: "Product B" }
];

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Node.js API!' });
});

// GET: ดูข้อมูลทั้งหมด
app.get('/products', (req, res) => {
  res.json(products);
});

// GET: ดูข้อมูลตาม id
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (product) res.json(product);
  else res.status(404).json({ error: 'Product not found' });
});

// POST: เพิ่มข้อมูล
app.post('/products', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name
  };
  products.push(newProduct);
  res.status(201).json({ message: 'เพิ่มข้อมูลเรียบร้อย' });
});

// PUT: แก้ไขข้อมูล
app.put('/products/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (product) {
    product.name = req.body.name;
    res.json({ message: 'แก้ไขข้อมูลเรียบร้อย' });
  } else res.status(404).json({ error: 'Product not found' });
});

// DELETE: ลบข้อมูล
app.delete('/products/:id', (req, res) => {
  products = products.filter(p => p.id != req.params.id);
  res.json({ message: 'ลบข้อมูลเรียบร้อย' });
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
