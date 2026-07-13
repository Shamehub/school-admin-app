# School Administration Application

Aplikasi Administrasi Sekolah dengan React, Node.js + Express, PostgreSQL, Tailwind CSS, dan Bootstrap.

## 📋 Fitur Utama

- ✅ Sistem Autentikasi & Login
- ✅ Dashboard Admin
- ✅ Manajemen Siswa (CRUD)
- ✅ Manajemen Guru (CRUD)
- ✅ Manajemen Kelas
- ✅ Manajemen Jadwal
- ✅ Manajemen Nilai
- ✅ Responsive Design

## 🛠️ Tech Stack

### Frontend
- React 18+
- Tailwind CSS
- Bootstrap 5
- Axios (HTTP Client)
- React Router
- JWT Token

### Backend
- Node.js + Express
- PostgreSQL
- Sequelize ORM
- JWT Authentication
- CORS
- Dotenv

## 📁 Struktur Project

```
school-admin-app/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── database/
│   ├── .env
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── .env
│   └── package.json
├── database/
│   └── schema.sql
└── README.md
```

## 🚀 Cara Menjalankan

### Backend

```bash
cd backend
npm install
# Setup .env file
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm start
```

## 📝 Environment Variables

### Backend (.env)

```
PORT=5000
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/school_db
JWT_SECRET=your_jwt_secret_key
```

### Frontend (.env)

```
REACT_APP_API_URL=http://localhost:5000/api
```

## 📚 Database Setup

```bash
psql -U postgres
CREATE DATABASE school_db;
\connect school_db
\i database/schema.sql
```

## 👤 Default Login

- Email: `admin@school.com`
- Password: `admin123`

## 📄 License

MIT
