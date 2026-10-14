# Smart Society Management

A full-stack community management system built with PostgreSQL, Node.js/Express, React, and Flutter.

## Features
- Resident registration and JWT login
- Admin approval flow
- Visitor pass generation with QR
- Security guard verification of visitor pass
- Monthly bill management
- Complaint tracking
- Notice board
- Payment methods: JazzCash, Easypaisa

## Project Structure
- `backend/` — Node.js Express API
- `admin/` — React admin frontend
- `mobile/` — Flutter mobile app
- `docker-compose.yml` — PostgreSQL setup
- `README.md` — project overview

## Quick Start

### 1. Start PostgreSQL
```bash
docker compose up -d
```

### 2. Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### 3. Admin Dashboard
```bash
cd admin
cp .env.example .env
npm install
npm run dev
```

### 4. Mobile App
```bash
cd mobile
flutter pub get
flutter run
```

## Seeded Accounts
- Admin: `admin@smartsociety.com` / `admin123`
- Resident: `resident1@smartsociety.com` / `resident123`
- Guard: `guard1@smartsociety.com` / `guard123`

## Repo
https://github.com/usmanappdevelops/smart-society-management

## ZIP Download
Open the repo page and click `Code` > `Download ZIP`.
