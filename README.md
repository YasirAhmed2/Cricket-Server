# 🏏 Cricket Players Server

A lightweight, production-ready-style REST API built with Node.js and Express.js for managing and analyzing cricket player data.  
This server demonstrates modular routing, clean code organization, file-based persistence, and graceful shutdown behavior so data isn't lost between restarts.

---

## 🔖 Highlights
- Minimal, easy-to-extend REST API for cricket players
- Category-specific routes (batsmen, bowlers, all-rounders)
- Performance endpoints (top scorers, top wicket-takers, summaries)
- Full CRUD support (GET, POST, PUT, DELETE)
- File-based persistence with automatic save on shutdown
- Clear, modular code organization for fast onboarding

---

## 🚀 Features
- Fetch all players or search by id, name, or team
- Filter players by role: Batsman, Bowler, All-rounder
- Get top scorers, top wicket-takers, and highest individual performances
- Summary statistics for quick insights
- Create, update, and delete player records
- Graceful shutdown: automatically writes in-memory data to disk on SIGINT/SIGTERM

---

## 🧰 Tech Stack
- Node.js (runtime)
- Express.js (web framework)
- Local JSON file storage (players-data.json) for persistence (no DB required)

---

## 📁 Project Structure

```
📦 Cricket Server
├── 📂 src/
│   ├── index.js
│   └── players.js
├── 📜 package.json
├── 📜 players-data.json
└── 📜 README.md
```

---

## ⚙️ Installation

1. Clone the repository
   ```bash
   git clone https://github.com/YasirAhmed2/Cricket-Server.git
   cd Cricket-Server
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the server (development)
   ```bash
   npm run dev
   ```

- Default server URL: http://localhost:3000

---

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


Notes:
- Endpoints that filter or sort will return JSON arrays sorted by the relevant metric (e.g., runs or wickets).
- POST and PUT expect JSON bodies; ensure `Content-Type: application/json` is set.

---

## 🧩 Example Requests

Add a new player
- POST http://localhost:3000/players
- Request body:
```json
{
  "id": 11,
  "name": "Babar Azam",
  "team": "Pakistan",
  "role": "Batsman",
  "runs": 4500,
  "wickets": 0,
  "average": 56.3
}
```

Update a player
- PUT http://localhost:3000/player/11
- Request body:
```json
{
  "runs": 4800,
  "average": 58.1
}
```

Delete a player
- DELETE http://localhost:3000/player/11

Search examples
- GET `/player/name/Babar` — search by partial name
- GET `/player/team/Pakistan` — players in team "Pakistan"

---

## 💾 Data Persistence

- Data is stored in players-data.json (file-based persistence).
- On graceful shutdown (SIGINT / SIGTERM), in-memory changes are flushed to the JSON file automatically so data is preserved between restarts.
- If you want production-grade persistence, replace JSON file logic with a database (e.g., MongoDB, PostgreSQL) and update the data layer accordingly.

Example server shutdown output (informational):
```
Saving data to file before shutdown...
Server closed.
```


## 🤝 Contributing

Thank you for your interest in improving Cricket Players Server — contributions are very welcome!

How to contribute:
- Fork the repository and create a feature branch:
  - git checkout -b feat/your-feature
- Make small, focused commits with descriptive messages.
- Open a Pull Request describing:
  - What you changed
  - Why the change is needed
  - Any backwards-incompatible changes or migration steps

---

## 🧑‍💻 Author
Yasir Ahmed — AI/ML & Data Science Enthusiast | Backend Developer  
- Winner — ZAB AI CUP 2024  
- BSCS Student — University of Haripur

---

## 📜 License
This project is licensed under the MIT License — feel free to use and modify it for learning or production.

---

