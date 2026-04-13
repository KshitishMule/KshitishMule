# 🚀 Full Stack Developer Portfolio

A production-ready developer portfolio built with **React + Vite + Tailwind CSS + Framer Motion** (frontend) and **Node.js + Express + MongoDB Atlas** (backend).

---

## 📁 Project Structure

```
portfolio/
├── client/          # React frontend (deploy to Vercel)
│   ├── src/
│   │   ├── components/   # Navbar, Hero, About, Skills, Projects, Experience, ContactForm, Footer
│   │   ├── pages/        # Home, ProjectDetail, Contact
│   │   └── data/         # portfolio.js (edit YOUR info here)
│   ├── vercel.json
│   └── .env.example
└── server/          # Express backend (deploy to Render)
    ├── config/           # db.js, notifications.js
    ├── controllers/      # contactController.js
    ├── models/           # Message.js
    ├── routes/           # contact.js
    ├── index.js
    └── .env.example
```

---

## ⚡ Quick Start (Local Development)

### 1. Clone & install dependencies

```bash
# Backend
cd server
npm install
cp .env.example .env   # Fill in your values

# Frontend
cd ../client
npm install
cp .env.example .env   # Set VITE_API_URL=http://localhost:5000
```

### 2. Start development servers

```bash
# Terminal 1 — Backend
cd server
node index.js          # or: npx nodemon index.js

# Terminal 2 — Frontend
cd client
npm run dev
```

Frontend runs at: http://localhost:5173  
Backend runs at: http://localhost:5000

---

## 🎨 Personalizing Your Portfolio

**Edit `client/src/data/portfolio.js`** to update:
- Your name, role, bio, email, location
- Social links (GitHub, LinkedIn, Twitter)
- Projects (title, description, tags, images, links)
- Skills and categories
- Work experience

---

## 🌍 Deployment

### Step 1 — MongoDB Atlas (Database)

1. Go to [mongodb.com/atlas](https://mongodb.com/atlas) → Create free account
2. Create a new **M0 free cluster**
3. Database Access → Add user with password
4. Network Access → Add `0.0.0.0/0` (allow all IPs)
5. Connect → Copy connection string (replace `<password>`)

### Step 2 — Backend on Render

1. Push your `server/` folder to a GitHub repo
2. Go to [render.com](https://render.com) → New Web Service
3. Connect your GitHub repo
4. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `node index.js`
   - **Environment:** Node
5. Add Environment Variables:
   ```
   MONGO_URI=mongodb+srv://...
   EMAIL_USER=your@gmail.com
   EMAIL_PASS=your_app_password
   TWILIO_SID=ACxxxxxxxxx
   TWILIO_AUTH_TOKEN=xxxxxxxxx
   TWILIO_PHONE=+1234567890
   OWNER_PHONE=+0987654321
   ALLOWED_ORIGINS=https://yourportfolio.vercel.app
   NODE_ENV=production
   PORT=10000
   ```
6. Deploy → Copy your Render URL (e.g. `https://portfolio-api.onrender.com`)

### Step 3 — Frontend on Vercel

1. Push your `client/` folder to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Vercel auto-detects Vite — no config needed
4. Add Environment Variable:
   ```
   VITE_API_URL=https://portfolio-api.onrender.com
   ```
5. Deploy → Your portfolio is live! 🎉

---

## 📧 Gmail App Password Setup

1. Google Account → Security → Enable 2-Step Verification
2. Search "App passwords" → Create one for "Mail"
3. Use the 16-character password as `EMAIL_PASS`

## 📱 Twilio SMS Setup

1. Sign up at [twilio.com](https://twilio.com) (free trial)
2. Get Account SID, Auth Token from dashboard
3. Buy/use a trial phone number → set as `TWILIO_PHONE`
4. Set `OWNER_PHONE` to your personal number to receive SMS alerts

---

## 🧪 API Example

**POST** `https://your-backend.onrender.com/api/contact`

```json
// Request
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hi! I'd love to work with you on a project."
}

// Success Response (201)
{
  "success": true,
  "message": "Thanks for reaching out! I'll get back to you soon.",
  "data": {
    "id": "64a1b2c3d4e5f6g7h8i9j0k",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
}

// Error Response (400)
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    { "field": "email", "message": "Please enter a valid email" }
  ]
}
```

---

## 🛡️ Security Features

- **Helmet** — Security headers
- **CORS** — Restricted to your frontend origin
- **Rate Limiting** — 100 req/15min global, 5 contact submissions/hour
- **Input Validation** — express-validator on all fields
- **Input Sanitization** — XSS protection via escape()
- **dotenv** — Secrets never in code

---

## 📦 Build for Production

```bash
cd client
npm run build     # Outputs to client/dist/
```

Vercel runs this automatically on deploy.

---

## 🔧 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, Vite, Tailwind CSS v3, Framer Motion |
| Routing | React Router DOM v6 |
| Icons | React Icons (Feather + HeroIcons) |
| SEO | React Helmet Async |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas + Mongoose |
| Email | Nodemailer + Gmail SMTP |
| SMS | Twilio |
| Security | Helmet, CORS, express-rate-limit, express-validator |
| Logging | Morgan |
| Deploy | Vercel (frontend) + Render (backend) |
