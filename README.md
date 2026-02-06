# 🛠️ HomeFixo – Server

This repository contains the **backend (server-side)** code for **HomeFixo**, a home service booking platform where users can book services such as plumbing, electrical work, cleaning, and more.

The server provides RESTful APIs to manage services, bookings, and user-related data using MongoDB.

---

## 🌐 Live Server API

🔗 https://home-fixo-server.vercel.app/

---

## 🚀 Features

- RESTful API using Express.js
- CRUD operations for services
- Booking management system
- Retrieve all bookings for a user by email
- Fetch service details associated with bookings
- MongoDB database integration
- Error handling with proper HTTP status codes
- CORS enabled for secure client-server communication

---

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **MongoDB Atlas**
- **dotenv**
- **cors**

---

## 📁 Project Structure

server/
├── index.js
├── routes/
├── controllers/
├── middleware/
└── package.json


---

## 🔐 Environment Variables

Create a `.env` file in the root directory and add the following:

```env
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
⚠️ Do not commit the .env file to GitHub.

▶️ Run the Server Locally
1️⃣ Clone the repository
git clone https://github.com/AmirDihan/HomeFixo-Server.git
cd HomeFixo-Server
2️⃣ Install dependencies
npm install
3️⃣ Start the server
nodemon index.js
or

node index.js
The server will run on:

http://localhost:3000
🔄 API Endpoints
🧰 Services
GET    /services
GET    /my-services
GET    /service-details/:id
GET    /my-bookings/:id
POST   /service
POST   /booking
PUT    /edit-service/:id
DELETE /service/:id
DELETE /booking/:id
📅 Bookings
POST /bookings
GET  /my-bookings?email=user@email.com
📦 Database Collections
🧰 Services Collection
{
  "serviceName": "Electrical Wiring Repair",
  "category": "Electrical",
  "price": 1500,
  "description": "Fix faulty wiring, switches, and power socket problems.",
  "imageUrl": "https://example.com/image.jpg",
  "providerName": "Safe Electric Co.",
  "email": "provider@email.com"
}
📅 Bookings Collection
{
  "customerName": "Amir Hossan",
  "customerEmail": "amir@email.com",
  "serviceId": "ObjectId",
  "bookingDate": "2026-03-09",
  "price": 1500
}
🛡️ Error Handling
Async operations wrapped in try-catch

Meaningful error responses

Standard HTTP status codes (200, 400, 404, 500)

🌱 Future Improvements
JWT-based authentication

Role-based access control (Admin / Provider / User)

Payment gateway integration

Advanced filtering and pagination

Admin dashboard

👨‍💻 Author
Amir Hossan Dihan
GitHub: https://github.com/AmirDihan

📄 License
This project is licensed under the MIT License.