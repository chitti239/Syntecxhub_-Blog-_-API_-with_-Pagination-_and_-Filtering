# Syntecxhub_-Blog-_-API_-with_-Pagination-_and_-Filtering

# 📝 Blog API with Pagination & Filtering

A RESTful API built with **Node.js, Express.js, and MongoDB** that allows users to manage blog posts with **CRUD operations, pagination, filtering, and sorting**. This project demonstrates core backend development concepts commonly used in real-world applications.

---

# 🚀 Features

* Create blog posts
* Retrieve all blog posts
* Retrieve a single blog post by ID
* Update blog posts
* Delete blog posts
* Pagination for large datasets
* Filter blogs by **author** or **tags**
* Sort blogs by **newest or oldest**
* Proper API error handling

---

# 🛠 Tech Stack

| Technology | Description                     |
| ---------- | ------------------------------- |
| Node.js    | JavaScript runtime environment  |
| Express.js | Backend framework for APIs      |
| MongoDB    | NoSQL database                  |
| dotenv     | Environment variable management |
| CORS       | Cross-origin resource sharing   |

---

# 📁 Project Structure

```
server/
│
├── models
│   └── Blog.js
│
├── routes
│   ├── blog.js
│   └── Allroutes.js
│
├── server.js
├── package.json
└── .env


---

# ⚙️ Installation

## 1️⃣ Clone the repository

```bash
git clone https://github.com/chitti239/Syntecxhub_-Blog-_-API_-with_-Pagination-_and_-Filtering
cd server
```

---

## 2️⃣ Install dependencies

```bash
npm install
```

---

## 3️⃣ Create environment file

Create a `.env` file in the root directory:

```
MONGO_URI=your_mongodb_connection_string
```

---

## 4️⃣ Run the server

```bash
node server.js
```

Server will start at:

```
http://localhost:5000
```

---

# 📡 API Endpoints

### Base URL

```
http://localhost:5000/api/blogs
```

---

## Create Blog

| Method | Endpoint     | Description            |
| ------ | ------------ | ---------------------- |
| POST   | `/api/blogs` | Create a new blog post |

Example request:

```json
{
  "title": "Introduction to Node.js",
  "body": "Node.js allows developers to run JavaScript on the server side.",
  "author": "Sharini",
  "tags": ["node", "backend", "javascript"]
}
```

---

## Get All Blogs

| Method | Endpoint     | Description        |
| ------ | ------------ | ------------------ |
| GET    | `/api/blogs` | Retrieve all blogs |

---

## Pagination

| Query | Description              |
| ----- | ------------------------ |
| page  | Page number              |
| limit | Number of posts per page |

Example:

```
GET /api/blogs?page=2&limit=5
```

---

## Filtering

Filter by author:

```
GET /api/blogs?author=Sharini
```

Filter by tag:

```
GET /api/blogs?tag=node
```

---

## Sorting

Newest blogs first:

```
GET /api/blogs?sort=newest
```

Oldest blogs first:

```
GET /api/blogs?sort=oldest
```

---

## Get Single Blog

| Method | Endpoint         |
| ------ | ---------------- |
| GET    | `/api/blogs/:id` |

---

## Update Blog

| Method | Endpoint         |
| ------ | ---------------- |
| PUT    | `/api/blogs/:id` |

---

## Delete Blog

| Method | Endpoint         |
| ------ | ---------------- |
| DELETE | `/api/blogs/:id` |

---

# 📊 Example API Response

```json
{
  "total": 15,
  "page": 1,
  "totalPages": 3,
  "blogs": []
}
```

---

# 🧠 Concepts Demonstrated

* REST API design
* MongoDB schema modeling
* Pagination using `skip` and `limit`
* Filtering using query parameters
* Sorting data
* Error handling in Express

---

# 👩‍💻 Author

**Sharini**
B.Tech Student | Aspiring Full Stack Developer | Passionate about building scalable web applications

