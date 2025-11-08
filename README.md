# TaskPlanet Frontend

Frontend for TaskPlanet, a social media application. Built with **React** and designed to interact with the TaskPlanet backend API.

---

## 🚀 Features

* User authentication (via email OTP)
* User profile management
* Create, view, like, and share posts
* Image uploads via Cloudinary or local storage
* Responsive design for desktop and mobile

---

## 🛠️ Tech Stack

* **React** - Frontend library
* **React Router** - Client-side routing
* **Axios** - HTTP requests
* **Tailwind CSS** - Styling
* **Lucide-react** - Icons

---

## 💾 Installation

1. Clone the repository:

```bash
git clone <your-frontend-repo-url>
cd <repo-folder>
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the backend URL:

```env
REACT_APP_BACKEND_URL=http://localhost:5000
```

4. Start the frontend server:

```bash
npm start
```

The frontend will run on `http://localhost:3000` by default.

---

## 📂 Folder Structure

```
frontend/
├─ src/
│  ├─ components/     # Reusable UI components
│  ├─ pages/          # App pages
│  ├─ api/            # Axios API requests
│  ├─ css/            # Stylesheets
│  ├─ App.js
│  └─ index.js
├─ public/
├─ .env
└─ package.json
```

---

## 🔧 Environment Variables

| Variable              | Description            |
| --------------------- | ---------------------- |
| REACT_APP_BACKEND_URL | URL of the backend API |

---

## 💡 Tips

* Use **React Developer Tools** to debug components
* Ensure the backend server is running before starting the frontend
* Axios base URL is configured via `.env` for flexibility

---

## ⚡ Test Frontend

Open your browser and go to:

```
http://localhost:3000
```

You should see the TaskPlanet frontend running and connected to your backend API.
