# Express.js App (Web + API)

Simple Express.js application that includes both **web pages** (EJS + Bootstrap) and **API endpoints**.

## Features

- Express.js server
- Web interface with EJS templates + Bootstrap
- API routes (Product, User, Book, Post, Feedback)
- Multiple database options (MongoDB / MySQL / SQLite via Sequelize)
- Session & cookie support
- File upload support
- Basic authentication helpers (bcrypt)

## Requirements

- Node.js 16+

## Installation

```bash
npm install
cp .env.example .env
npm run dev
```

## Scripts

| Command       | Description             |
|---------------|-------------------------|
| `npm run dev` | Start with nodemon      |
| `npm start`   | Start production server |

## Project Structure

```
expressjs-api/
├── app.js              # Main entry point
├── routes/
│   ├── api.js          # API routes
│   └── web.js          # Web routes
├── controllers/        # Controllers
├── models/             # Database models
├── views/              # EJS templates
└── public/             # Static assets
```

## Note

Dependencies are from 2022–2023. Consider updating packages (`npm outdated`) before using in production.

## License

MIT
