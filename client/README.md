# ⚛️  HR Projects (React + Vite)

> Minimal, fast, and ready-to-code React setup for internal HR tools using Vite.

## ✨ Features

- ⚡ Vite + React 18 – Super fast development with HMR
- 🎨 Ant Design + Tailwind
- 🔧 Pre-configured ESLint + Prettier
- 🔑 Session Handling
- 📂 Clean Project Structure

---

## 🚀 Getting Started
### 1. Clone the repo

```bash
git clone https://github.com/untitlez/HR-Projects.git
cd HR-Projects
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a .env file in the root folder:
```env
VITE_API_URL=http://localhost:5000
```

### 4. Start the development server
```bash
npm run dev
```

### 4. Open in Browser
```plaintext
http://localhost:3000
```

---

## 📂 Project Structure
```plaintext
/src
├── App.jsx                 
├── main.jsx                
├── index.css               
│
├── store/                  
│   └── store.jsx
│
├── lib/                    
│   ├── config.jsx          
│   ├── routes.jsx          
│   └── session.jsx         
│
├── components/             
│   ├── Account.jsx
│   ├── Background.jsx
│   ├── ConfigTheme.jsx
│   ├── MenuBar.jsx
│   ├── SuccessPage.jsx
│   ├── ToggleTheme.jsx
│   │
│   ├── admin/              
│   │   ├── ApprovalConfirm.jsx
│   │   ├── SubmitForm.jsx
│   │   └── UsersInfo.jsx
│   │
│   └── auth/               
│       └── ButtonLogin.jsx
│
├── pages/                  
│   ├── index.jsx           
│   │
│   ├── admin/              
│   │   ├── index.jsx
│   │   ├── AdminForm.jsx
│   │   ├── AdminInfo.jsx
│   │   └── constants/
│   │       ├── infoItem.jsx
│   │       ├── inputItem.jsx
│   │       └── menuItem.jsx
│   │
│   ├── auth/               
│   │   ├── index.jsx
│   │   └── constants/
│   │       ├── accountData.jsx
│   │       └── loginItem.jsx
│   │
│   └── employee/           
│       ├── index.jsx
│       ├── LeaveForm.jsx
│       ├── MyProfile.jsx
│       └── constants/
│           ├── infoItem.jsx
│           ├── inputItem.jsx
│           ├── menuItem.jsx
│           └── personalData.jsx
│
└── .env
```
