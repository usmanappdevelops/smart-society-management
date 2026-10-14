# Smart Society Backend API

## Setup

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

## API overview

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET /api/visitors`
- `POST /api/visitors`
- `POST /api/visitors/verify`
- `GET /api/bills`
- `POST /api/bills`
- `GET /api/complaints`
- `POST /api/complaints`
- `PATCH /api/complaints/:id/status`
- `GET /api/notices`
- `POST /api/notices`
- `GET /api/payments/methods`
- `POST /api/payments/create`
