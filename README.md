# Smart Society Management

A full-stack community management system for a residential society with:
- PostgreSQL database
- Node.js + Express backend
- React admin dashboard
- Flutter mobile app
- JWT authentication and role-based access
- Visitor QR gate pass flow
- Payment integration stubs for JazzCash and Easypaisa

## Repository structure

- `backend/` – REST API server
- `admin/` – React web dashboard
- `mobile/` – Flutter mobile app
- `docker-compose.yml` – PostgreSQL + pgAdmin
- `README.md` – setup instructions

## Quick start

### 1) Start database

```bash
docker compose up -d
```

### 2) Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

Backend runs at: `http://localhost:5000`

### 3) Admin frontend

```bash
cd admin
cp .env.example .env
npm install
npm run dev
```

Admin runs at the Vite local URL shown in the terminal (usually `http://localhost:5173`)

### 4) Mobile app

```bash
cd mobile
flutter pub get
flutter run
```

## Default seeded accounts

- Admin: `admin@smartsociety.com` / `admin123`
- Resident: `resident1@smartsociety.com` / `resident123`
- Guard: `guard1@smartsociety.com` / `guard123`

## Features included

- User registration and login
- Admin approval flow for residents/guards
- JWT-protected routes
- Resident and admin visibility for visitors, bills, complaints, notices
- Visitor pass generation with QR code payload
- Guard verification for visitor pass
- Maintenance complaint management
- Notice board and admin announcements
- JazzCash and Easypaisa payment methods as integration-ready stubs

## Database configuration

Default PostgreSQL config:

- Host: `localhost`
- Port: `5432`
- Database: `smart_society`
- User: `postgres`
- Password: `postgres`

## Download ZIP

Use GitHub's built-in ZIP download option on the repo page:

- Open: https://github.com/usmanappdevelops/smart-society-management
- Click the green `Code` button
- Click `Download ZIP`

## Notes

This repository is structured as a functional academic project scaffold with ready-to-extend modules for Final Year Project evaluation.
