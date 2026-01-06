## 📂 Project Structure

---

### CLIENT

```plaintext

client/
├── src/
│   ├── App.jsx                 
│   ├── main.jsx                
│   ├── index.css               
│   │
│   ├── store/                  
│   │   └── store.jsx
│   │
│   ├── lib/                    
│   │   ├── config.jsx          
│   │   ├── routes.jsx          
│   │   └── session.jsx         
│   │
│   ├── components/             
│   │   ├── Account.jsx
│   │   ├── Background.jsx
│   │   ├── ConfigTheme.jsx
│   │   ├── MenuBar.jsx
│   │   ├── SuccessPage.jsx
│   │   ├── ToggleTheme.jsx
│   │   │
│   │   ├── admin/              
│   │   │   ├── ApprovalConfirm.jsx
│   │   │   ├── SubmitForm.jsx
│   │   │   └── UsersInfo.jsx
│   │   │
│   │   └── auth/               
│   │       └── ButtonLogin.jsx
│   │
│   └── pages/                  
│       ├── index.jsx           
│       │
│       ├── admin/              
│       │   ├── index.jsx
│       │   ├── AdminForm.jsx
│       │   ├── AdminInfo.jsx
│       │   └── constants/
│       │       ├── infoItem.jsx
│       │       ├── inputItem.jsx
│       │       └── menuItem.jsx
│       │
│       ├── auth/               
│       │   ├── index.jsx
│       │   └── constants/
│       │       ├── accountData.jsx
│       │       └── loginItem.jsx
│       │
│       └── employee/           
│           ├── index.jsx
│           ├── LeaveForm.jsx
│           ├── MyProfile.jsx
│           └── constants/
│               ├── infoItem.jsx
│               ├── inputItem.jsx
│               ├── menuItem.jsx
│               └── personalData.jsx
│
├── public/                   
├── .env
├── .gitignore
└── README.md

```
---

### SERVER

```plaintext

server/
├── src/
│   ├── controllers/
│   │   ├── auth.ts
│   │   └── users.ts
│   │
│   ├── db/
│   │   └── supabase.ts       
│   │
│   ├── interface/
│   │   ├── auth.ts
│   │   └── users.ts
│   │
│   ├── middleware/
│   │   └── auth.ts       
│   │
│   ├── prisma/
│   │   └── schema.prisma      
│   │
│   ├── routes/
│   │   └── index.ts       
│   │
│   ├── services/
│   │   ├── auth.ts
│   │   └── users.ts
│   │
│   └── index.ts 
│
├── .env 
├── .gitignore 
├── bun.lock
├── package.json
└── README.md

```
