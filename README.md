

# 🏏 Cricket Players Server

A lightweight **Node.js + Express.js** REST API for managing and analyzing cricket player data.  
It provides endpoints to fetch players by category, team, or performance stats, as well as routes for creating, updating, and deleting player records.  

This project demonstrates practical backend development concepts like **modular routing**, **data handling**, and **graceful shutdown with data persistence**.

---

## 🚀 Features
- RESTful API for cricket player management  
- Categorized routes for batsmen, bowlers, and all-rounders  
- Fetch top scorers, top wicket-takers, and player summaries  
- Search players by ID, name, or team  
- Supports `GET`, `POST`, `PUT`, and `DELETE` operations  
- Automatically saves data to file before shutdown  
- Clean code structure with modular separation (`players.js`, `server.js`)  

---

## 🧠 Tech Stack
- **Node.js** – JavaScript runtime  
- **Express.js** – Fast, unopinionated web framework  
- **JSON File Storage** – Data persistence using local JSON file (no database required)  

---

## 📁 Folder Structure

```
📦 Cricket Server
├── 📂 src/                      
│   └── 📜 index.js
│   └── 📜 players.js

│
├── 📜 package.json             
├── 📜 players-data.json 
│           
├── 📜 README.md         # Project documentation

```


---

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YasirAhmed2/Cricket-Server.git
   cd Cricket-Server


Install dependencies
    ```bash
    npm install

Start the server
    ```bash
    npm run dev


By default, the server runs at:
👉 http://localhost:3000


## 🔗 API Endpoints

### 🏠 Base Route
| Method | Endpoint | Description |
|--------|-----------|-------------|
| **GET** | `/` | Returns a welcome/start message |

---

### 👥 Player Routes
| Method | Endpoint | Description |
|--------|-----------|-------------|
| **GET** | `/players` | Get all players |
| **GET** | `/player/:id` | Get player details by ID |
| **GET** | `/player/team/:team` | Get all players from a specific team |
| **GET** | `/player/name/:name` | Search player by name |
| **POST** | `/players` | Add a new player |
| **PUT** | `/player/:id` | Update an existing player |
| **DELETE** | `/player/:id` | Delete a player |

---

### ⚡ Performance & Category Routes
| Method | Endpoint | Description |
|--------|-----------|-------------|
| **GET** | `/players/batsmen` | Get all batsmen |
| **GET** | `/players/bowlers` | Get all bowlers |
| **GET** | `/players/allrounders` | Get all all-rounders |
| **GET** | `/players/top-scorers` | Get top run scorers |
| **GET** | `/players/top-wickets` | Get top wicket takers |
| **GET** | `/players/high-scorers` | Get players with highest individual scores |
| **GET** | `/players/high-wickets` | Get players with highest wicket counts |
| **GET** | `/players/summary` | Get summary statistics for all players |


🧩 Example Request

Add a New Player

POST http://localhost:3000/players
Content-Type: application/json

{
  "id": 11,
  "name": "Babar Azam",
  "team": "Pakistan",
  "role": "Batsman",
  "runs": 4500,
  "wickets": 0,
  "average": 56.3
}


Update a Player

PUT http://localhost:3000/player/11
Content-Type: application/json

{
  "runs": 4800,
  "average": 58.1
}


Delete a Player

DELETE http://localhost:3000/player/11

💾 Data Persistence

Before shutdown (CTRL + C or system signal), the server automatically saves all player data to a file:

Saving data to file before shutdown...
Server closed.


This ensures that no data is lost between restarts.

🧠 Learning Concepts Demonstrated

Express.js routing & middleware

REST API design principles

File-based data storage (can easily be upgraded to MongoDB later)

Clean project structure & modular exports

Graceful server shutdown using process signals (SIGINT, SIGTERM)

🧑‍💻 Author

Yasir Ahmed
AI/ML & Data Science Enthusiast | Backend Developer
🏆 Winner – ZAB AI CUP 2024
🎓 BSCS Student – University of Haripur (Govt. Akhtar Nawaz Khan Degree College KTS)
🔗 GitHub
 • LinkedIn

📜 License

This project is licensed under the MIT License — feel free to use and modify it for learning or production.

💬 Note

This is a basic yet scalable Express.js backend designed for educational and demonstration purposes.
It can be extended with:

Database integration (MongoDB / PostgreSQL)

Authentication (JWT)

Frontend UI (React or Next.js)

Analytics dashboards for player performance


---


