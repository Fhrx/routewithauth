# React Auth Dashboard

A modern React dashboard template with authentication and role‑based access control.  
Built using **React, Vite, React Router, Tailwind CSS**, and **shadcn/ui** — suitable for learning authentication flow and building a portfolio project.

---

## 🚀 Features

- Public & protected routes  
- Login & logout system  
- Role‑based access control (User & Admin)  
- Persistent session using `localStorage`  
- Responsive dashboard layout (Navbar & Sidebar)  
- Modern UI using Tailwind CSS & shadcn/ui  
- Custom 404 (Not Found) page  

---

## 👤 Dummy Accounts (For Testing)

| Role  | Email           | Password     |
|------|-----------------|--------------|
| Admin | admin@mail.com | admin12345 |
| User  | user@mail.com  | user12345  |

---

## 🛠 Tech Stack

- **React**
- **Vite**
- **React Router v6**
- **Tailwind CSS**
- **shadcn/ui**
- **React Context API**
- **LocalStorage**
- **lucide-react**

---

## 📁 Project Structure

```
src/
├── assets
├── components
│   ├── ui
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   └── RoleBadge.jsx
├── context
│   └── AuthContext.jsx
├── pages
│   ├── dashboard
│   │   ├── Overview.jsx
│   │   ├── Profile.jsx
│   │   ├── Settings.jsx
│   │   └── Admin.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   └── NotFound.jsx
├── routes
│   ├── ProtectedRoute.jsx
│   └── AdminRoute.jsx
├── App.jsx
└── main.jsx
```

---

## 🧭 Routes Overview

| Route | Access |
|------|-------|
| `/` | Public |
| `/login` | Public |
| `/dashboard` | Authenticated |
| `/dashboard/profile` | Authenticated |
| `/dashboard/settings` | Authenticated |
| `/admin` | Admin only |
| `*` | Not Found |

---

## 📦 Installation

```bash
git clone https://github.com/Fhrx/routewithauth.git
cd routewithauth
pnpm install
pnpm dev
```

Open in browser:  
`http://localhost:5173`

---

## 🔐 Authentication Flow

Authentication is handled using **React Context API**.  
User data is stored in `localStorage` to keep the session active after page reload.  
Route protection is implemented using custom `ProtectedRoute` and `AdminRoute` components.

---

## 📌 Future Improvements

- Backend authentication (JWT)
- Register & Forgot Password pages
- Admin user management
- Charts & analytics
- Dark mode

---

## 📄 License

MIT License
