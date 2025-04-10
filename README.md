# 🧪 ALAB318.3.1 – RESTful API for Comments, Posts & Users

This project is an Express.js RESTful API built as part of a backend lab focused on handling users, posts, and comments. It demonstrates route handling, middleware, error management, and in-memory data storage, along with basic HATEOAS support and API key protection.

## 🚀 Features

### 👤 Users Routes
- `GET /api/users` – Get all users  
- `POST /api/users` – Create a new user  
- `GET /api/users/:id` – Get user by ID  
- `PATCH /api/users/:id` – Update user by ID  
- `DELETE /api/users/:id` – Delete user by ID  
- `GET /api/users/:id/posts` – Get posts created by a specific user  

### 📝 Posts Routes
- `GET /api/posts` – Get all posts (supports `?userId=value` query filter)  
- `POST /api/posts` – Create a new post  
- `GET /api/posts/:id` – Get post by ID  
- `PATCH /api/posts/:id` – Update post by ID  
- `DELETE /api/posts/:id` – Delete post by ID  
- `GET /api/posts/user/:id` – Get posts by a specific user  

### 💬 Comments Routes
- `GET /api/comments` – Get all comments (supports `?userId=value` and/or `?postId=value`)  
- `POST /api/comments` – Create a new comment  
- `GET /api/comments/:id` – Get comment by ID  
- `PATCH /api/comments/:id` – Update a comment’s body  
- `DELETE /api/comments/:id` – Delete comment by ID  

## 🔐 API Key Protection

All `/api/*` routes require an API key passed as a query parameter:

```
?api-key=perscholas
```

### ✅ Valid API keys:
```js
["perscholas", "ps-example", "hJAsknw-L198sAJD-l3kasx"]
```

## 🛠️ Built With
- Node.js  
- Express.js  
- Body-Parser  
- Nodemon (for development)

## 🧪 Testing with Postman

### Example: Create a comment

- **Method**: `POST`  
- **URL**: `http://localhost:3000/api/comments?api-key=perscholas`  
- **Headers**:  
  - `Content-Type: application/json`  
- **Body (raw JSON)**:
```json
{
  "userId": 1,
  "postId": 2,
  "body": "This post helped me a lot!"
}
```

## 📁 File Structure

```
.
├── data/
│   ├── posts.js
│   └── users.js
├── routes/
│   ├── comments.js
│   ├── posts.js
│   └── users.js
└── utilities/
    ├── error.js
    └── index.js
```

## ✅ Completion Checklist

| Feature | Status |
|---------|--------|
| All user, post, and comment routes implemented | ✅  
| Query filters for `userId` and `postId` supported | ✅  
| API key protection and error handling added | ✅  
| Route testing via Postman | ✅  
| Project ready for GitHub | ✅  

## 👨‍💻 Author

**Jose Francisco Bautista**  
Built during an Express.js backend lab using creativity, logic, and lots of coffee ☕️
