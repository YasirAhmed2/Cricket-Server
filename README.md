# Cricket Server

A minimal RESTful server for managing cricket data (teams, players, matches). Intended as a semester Web Engineering project backend.

## Features
- CRUD for Teams, Players, Matches
- Basic authentication (JWT)
- Validation and error handling
- REST API suitable for a single-page frontend or mobile client

## Tech stack
- Node.js
- Express
- MongoDB (replaceable with another DB)
- Mongoose (ORM)
- dotenv for configuration

## Requirements
- Node.js 14+
- npm or yarn
- MongoDB (local or Atlas)

## Quickstart

1. Clone the repo
    git clone <repo-url>
    cd <project-dir>

2. Install dependencies
    npm install

3. Create a `.env` file at project root:
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/cricket
    JWT_SECRET=your_jwt_secret

4. Start the server
    npm run dev   # uses nodemon
    npm start     # production mode

## Available scripts
- npm start — start production server
- npm run dev — start in development with auto-reload
- npm test — run tests (if provided)
- npm run lint — lint the codebase (if configured)

## API (example endpoints)
All endpoints are prefixed with /api (configurable).

Auth
- POST /api/auth/register
- POST /api/auth/login

Teams
- GET /api/teams
- POST /api/teams
- GET /api/teams/:id
- PUT /api/teams/:id
- DELETE /api/teams/:id

Players
- GET /api/players
- POST /api/players
- GET /api/players/:id
- PUT /api/players/:id
- DELETE /api/players/:id

Matches
- GET /api/matches
- POST /api/matches
- GET /api/matches/:id
- PUT /api/matches/:id
- DELETE /api/matches/:id

Authentication
- Protected endpoints require `Authorization: Bearer <token>`

## Development notes
- Use environment variables for secrets and connection strings.
- Validate request payloads at the route level.
- Use pagination for large list endpoints.
- Add unit/integration tests for critical routes.

## Contributing
- Open an issue for bugs or feature requests.
- Fork the repo, create a feature branch, and submit a pull request.

## License
MIT