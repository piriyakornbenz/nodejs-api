const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const db = require('./db');

// GET: ดูข้อมูลทั้งหมด
app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// GET: ดูข้อมูลตาม id
app.get('/products/:id', (req, res) => {
  db.query('SELECT * FROM products WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length > 0) res.json(results[0]);
    else res.status(404).json({ error: 'Product not found' });
  });
});

// POST: เพิ่มข้อมูล
app.post('/products', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'กรุณาใส่ข้อมูลสินค้า' });
  }

  db.query('INSERT INTO products (name) VALUES (?)', [name], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'เพิ่มข้อมูลเรียบร้อย' });
  });
});

// PUT: แก้ไขข้อมูล
app.put('/products/:id', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'กรุณาใส่ข้อมูลสินค้า' });
  }

  db.query('UPDATE products SET name = ? WHERE id = ?', [name, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) res.status(404).json({ error: 'Product not found' });
    else res.json({ message: 'แก้ไขข้อมูลเรียบร้อย' });
  });
});

// DELETE: ลบข้อมูล
app.delete('/products/:id', (req, res) => {
  db.query('DELETE FROM products WHERE id = ?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) res.status(404).json({ error: 'Product not found' });
    else res.json({ message: 'ลบข้อมูลเรียบร้อย' });
  });
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
