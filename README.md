# Smart Society Management

A full-stack project for community and building management with:
- PostgreSQL database
- Node.js + Express + JavaScript backend
- React admin dashboard
- Flutter mobile app
- JWT RBAC auth
- Visitor QR gate passes
- Payment stubs for JazzCash and Easypaisa

## Project Structure

- `backend/` - REST API service
- `admin/` - React web dashboard
- `mobile/` - Flutter mobile application
- `docker-compose.yml` - PostgreSQL service
- `README.md` - documentation

## Quick Start

### 1) Setup database

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

### 3) Admin frontend

```bash
cd admin
npm install
npm run dev
```

### 4) Mobile app

```bash
cd mobile
flutter pub get
flutter run
```

## Default Admin Login

- Email: admin@smartsociety.com
- Password: admin123

## API base URL

The frontend apps use the backend at:

- local: `http://localhost:5000/api`

## Notes

- This project is structured for extension and academic evaluation.
- Payment APIs are implemented as integration-ready stubs for JazzCash and Easypaisa with callback simulation.
- QR codes are generated for visitor passes and scanned by the security guard mobile workflow.
