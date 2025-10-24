import express from "express";
import {
  getAllPlayers,
  getPlayerById,
  getPlayersByTeam,
  getBatsmen,
  getBowlers,
  getAllrounders,
  getTopScorers,
  getTopWickets,
  getHighScorers,
  getHighWicketTakers,
  searchPlayerByName,
  getSummaryStats,
  start,
  createPlayer,
  updatePlayer,
  deletePlayer,
  savePlayersToFile
} from "./players.js";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", start);

app.get("/players", getAllPlayers);
app.get("/player/:id", getPlayerById);
app.get("/player/team/:team", getPlayersByTeam);
app.get("/players/batsmen", getBatsmen);
app.get("/players/bowlers", getBowlers);
app.get("/players/allrounders", getAllrounders);
app.get("/players/top-scorers", getTopScorers);
app.get("/players/top-wickets", getTopWickets);
app.get("/players/high-scorers", getHighScorers);
app.get("/players/high-wickets", getHighWicketTakers);
app.get("/player/name/:name", searchPlayerByName);
app.get("/players/summary", getSummaryStats);


app.post("/players", createPlayer);
app.put("/player/:id", updatePlayer);
app.delete("/player/:id", deletePlayer);

const PORT = 3000;
const server = app.listen(PORT, () => {
  console.log(`Cricket Players Server running at http://localhost:${PORT}`);
});


process.on('SIGINT', () => {
  console.log('\nSaving data to file before shutdown...');
  savePlayersToFile();
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  console.log('\nSaving data to file before shutdown...');
  savePlayersToFile();
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});