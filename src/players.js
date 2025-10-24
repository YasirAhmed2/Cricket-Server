// players.js
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'players-data.json');


let players = loadPlayersFromFile();

function loadPlayersFromFile() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error loading players from file:', error);
  }
  
  // Default Pakistani players if file doesn't exist
  return [
    { id: 1, name: "Babar Azam", role: "Batsman", team: "Pakistan", runs: 5400, wickets: 0 },
    { id: 2, name: "Shaheen Afridi", role: "Bowler", team: "Pakistan", runs: 450, wickets: 220 },
    { id: 3, name: "Mohammad Rizwan", role: "Batsman", team: "Pakistan", runs: 3000, wickets: 0 },
    { id: 4, name: "Fakhar Zaman", role: "Batsman", team: "Pakistan", runs: 2500, wickets: 5 },
    { id: 5, name: "Haris Rauf", role: "Bowler", team: "Pakistan", runs: 150, wickets: 120 },
    { id: 6, name: "Shadab Khan", role: "Allrounder", team: "Pakistan", runs: 800, wickets: 90 },
    { id: 7, name: "Imad Wasim", role: "Allrounder", team: "Pakistan", runs: 600, wickets: 70 },
    { id: 8, name: "Naseem Shah", role: "Bowler", team: "Pakistan", runs: 100, wickets: 60 },
    { id: 9, name: "Mohammad Hafeez", role: "Allrounder", team: "Pakistan", runs: 4000, wickets: 50 },
    { id: 10, name: "Shoaib Malik", role: "Allrounder", team: "Pakistan", runs: 4500, wickets: 40 }
  ];
}

export function savePlayersToFile() {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(players, null, 2));
    console.log('Players data saved to file successfully.');
  } catch (error) {
    console.error('Error saving players to file:', error);
  }
}

export const start = (req, res) => {
  res.send("Cricket server using express JS ");
}

export const getAllPlayers = (req, res) => {
  res.json(players);
}

export const getPlayerById = (req, res) => {
  const player = players.find(p => p.id === parseInt(req.params.id));
  player ? res.json(player) : res.status(404).json({ message: "Player not found" });
};

export const getPlayersByTeam = (req, res) => {
  const teamPlayers = players.filter(p => p.team.toLowerCase() === req.params.team.toLowerCase());
  res.json(teamPlayers);
};

export const getBatsmen = (req, res) => {
  res.json(players.filter(p => p.role.toLowerCase() === "batsman"));
};

export const getBowlers = (req, res) => {
  res.json(players.filter(p => p.role.toLowerCase() === "bowler"));
};

export const getAllrounders = (req, res) => {
  res.json(players.filter(p => p.role.toLowerCase() === "allrounder"));
}

export const getTopScorers = (req, res) => {
  const top = [...players].sort((a, b) => b.runs - a.runs).slice(0, 5);
  res.json(top);
};

export const getTopWickets = (req, res) => {
  const top = [...players].sort((a, b) => b.wickets - a.wickets).slice(0, 5);
  res.json(top);
};

export const getHighScorers = (req, res) => {
  res.json(players.filter(p => p.runs >= 5000));
};

export const getHighWicketTakers = (req, res) => {
  res.json(players.filter(p => p.wickets >= 150));
};

export const searchPlayerByName = (req, res) => {
  console.log("Searching for:", req.params.name);

  const name = req.params.name.replace(/-/g, " ").toLowerCase();

  const results = players.filter(p =>
    p.name.toLowerCase().includes(name)
  );

  if (results.length === 0) {
    return res.status(404).json({ message: "Player not found" });
  }

  res.json(results);
};

export const getSummaryStats = (req, res) => {
  const totalPlayers = players.length;
  const totalRuns = players.reduce((sum, p) => sum + p.runs, 0);
  const totalWickets = players.reduce((sum, p) => sum + p.wickets, 0);
  res.json({ totalPlayers, totalRuns, totalWickets });
};

// POST - Create a new player
export const createPlayer = (req, res) => {
  const { name, role, team = "Pakistan", runs = 0, wickets = 0 } = req.body;

  // Validation
  if (!name || !role) {
    return res.status(400).json({ message: "Name and role are required" });
  }

  // Generate new ID
  const newId = players.length > 0 ? Math.max(...players.map(p => p.id)) + 1 : 1;

  const newPlayer = {
    id: newId,
    name,
    role,
    team,
    runs: parseInt(runs) || 0,
    wickets: parseInt(wickets) || 0
  };

  players.push(newPlayer);
  savePlayersToFile(); 
  
  res.status(201).json(newPlayer);
};

// PUT - Update an existing player
export const updatePlayer = (req, res) => {
  const playerId = parseInt(req.params.id);
  const playerIndex = players.findIndex(p => p.id === playerId);

  if (playerIndex === -1) {
    return res.status(404).json({ message: "Player not found" });
  }

  const { name, role, team, runs, wickets } = req.body;


  if (name) players[playerIndex].name = name;
  if (role) players[playerIndex].role = role;
  if (team) players[playerIndex].team = team;
  if (runs !== undefined) players[playerIndex].runs = parseInt(runs);
  if (wickets !== undefined) players[playerIndex].wickets = parseInt(wickets);


  
  res.json(players[playerIndex]);
};

// DELETE - Remove a player
export const deletePlayer = (req, res) => {
  const playerId = parseInt(req.params.id);
  const playerIndex = players.findIndex(p => p.id === playerId);

  if (playerIndex === -1) {
    return res.status(404).json({ message: "Player not found" });
  }

  const deletedPlayer = players.splice(playerIndex, 1)[0];
 
  
  res.json({ message: "Player deleted successfully", player: deletedPlayer });
};