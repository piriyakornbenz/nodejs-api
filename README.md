# Simple Node.js API

## ขั้นตอนติดตั้งและใช้งาน

1. ติดตั้ง Node.js  
   ดาวน์โหลดได้ที่: [https://nodejs.org/en/download](https://nodejs.org/en/download)

2. สร้างโปรเจกต์และติดตั้ง dependencies โดย เปิด terminal แล้วรันคำสั่งต่อไปนี้:
   ```bash
   npm init -y
   npm install express
   npm install mysql2

3. สร้างฐานข้อมูล MySQL
สร้างฐานข้อมูลชื่อ testdb

4. สร้างตารางในฐานข้อมูล
สร้างตารางชื่อ products พร้อมคอลัมน์ id และ name

5. รัน API ทดสอบ (ไม่มีเชื่อมต่อฐานข้อมูล)
   ```bash
     node index.js

7. รัน API ทดสอบพร้อมเชื่อมต่อฐานข้อมูล
```bash
     node index_db.js
