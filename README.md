
# 🌐 TaskPlanet Frontend

Frontend for **TaskPlanet**, a modern social media application built with **React (Vite)**.  
It provides a clean, responsive interface and integrates seamlessly with the [TaskPlanet Backend](https://taskplanet-backend-sm2h.onrender.com).

---

## 🚀 Features

### 🔐 Authentication
- **Google One Tap Login** – Quick and secure Google-based authentication.
- **Email OTP Verification** – Users can sign up or log in via OTP sent to their email.

### 📝 Social Feed
- Create posts using **either text or image** (only one required).
- View, like, and comment on posts.
- Posts update dynamically with smooth UI transitions.

### 👤 Profile Management
- View and edit user profile information.
- Supports profile images.

### 🖼️ Image Handling
- Image uploads handled via **Cloudinary** or local storage.
- Optimized image rendering for fast loading.

### 💻 Responsive Design
- Fully responsive layout for **mobile, tablet, and desktop** devices.
- Built with **Tailwind CSS** and modern component libraries.

---

## 🛠️ Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend Framework** | React (Vite) |
| **Routing** | React Router |
| **State Management** | React Hooks |
| **HTTP Client** | Axios |
| **Styling** | Tailwind CSS |
| **Icons** | Lucide-react |
| **Auth Integration** | Google OAuth (One Tap Login) |

---

## 💾 Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/vjbravo123/TaskPlanet-Frontend.git
cd TaskPlanet-Frontend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the project root:

```env
VITE_GOOGLE_AUTH_CLIENT=your_google_oauth_client_id
VITE_BACKEND_URL=https://taskplanet-backend-sm2h.onrender.com
# For local development:
# VITE_BACKEND_URL=http://localhost:5000
```

> ⚠️ Make sure to replace `your_google_oauth_client_id` with your actual Google Client ID from Google Cloud Console.

### 4️⃣ Start the Development Server

```bash
npm run dev
```

The app runs on **http://localhost:5173** (default Vite port).

---

## 📂 Folder Structure

```
frontend/
├─ src/
│  ├─ components/     # Reusable UI components (buttons, modals, etc.)
│  ├─ pages/          # App pages (Feed, Login, Profile, etc.)
│  ├─ api/            # Axios configuration and API calls
│  ├─ assets/         # Static assets (images, icons)
│  ├─ css/            # Stylesheets
│  ├─ App.jsx
│  └─ main.jsx
├─ public/
├─ .env
└─ package.json
```

---

## 🔧 Environment Variables

| Variable | Description |
|-----------|-------------|
| `VITE_GOOGLE_AUTH_CLIENT` | Google OAuth client ID for One Tap Login |
| `VITE_BACKEND_URL` | Backend API base URL |

---

## 🌍 Deployment Info

- **Frontend Live:** [https://task-planet-frontend-yk82.vercel.app/](https://task-planet-frontend-yk82.vercel.app/)
- **Backend API:** [https://taskplanet-backend-sm2h.onrender.com](https://taskplanet-backend-sm2h.onrender.com)
- **GitHub Repository:** [TaskPlanet Frontend](https://github.com/vjbravo123/TaskPlanet-Frontend.git)

> ⏳ *Note:* The backend is hosted on a **Render free instance**, so it may take up to 1 minute to wake up after inactivity.

---

## 💡 Tips for Developers

- Ensure your backend is running before starting the frontend.
- Use **React Developer Tools** for debugging.
- Configure Google One Tap properly in Google Cloud Console (Web Client ID required).
- Keep your `.env` file private and never push it to GitHub.

---

### 🧑‍💻 Author

**Vivek Joshii**  
🔗 [GitHub: @vjbravo123](https://github.com/vjbravo123)

---

> 💬 *A responsive and modern frontend for TaskPlanet — integrating Google One Tap Login, OTP verification, and social post features.*
