# Skillify.AI - AI-Powered Testing Platform

[![GitHub](https://img.shields.io/badge/GitHub-Gupta--02/Skillify__ai-blue?logo=github)](https://github.com/Gupta-02/Skillify_ai)
[![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.5.1-green?logo=mongodb)](https://www.mongodb.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini%20AI-Powered-orange?logo=google)](https://ai.google.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

An intelligent testing platform that leverages **Google Gemini AI** to create, manage, and evaluate assessments with automated question generation and scoring.

---

## ✨ Features

```
┌─────────────────────────────────────────────────────────────────┐
│                        CORE FEATURES                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  🤖 AI-Powered Question Generation                              │
│     └─ Uses Google Gemini AI for intelligent question creation  │
│                                                                  │
│  🔐 Secure User Authentication                                  │
│     └─ NextAuth.js with session management                      │
│                                                                  │
│  📝 Dynamic Test Creation                                       │
│     └─ Custom topics, difficulty levels, time limits            │
│                                                                  │
│  ⏱️  Real-time Test Taking                                       │
│     └─ Interactive interface with countdown timers              │
│                                                                  │
│  📊 Automated Scoring & Analysis                                │
│     └─ AI-powered result evaluation with detailed feedback      │
│                                                                  │
│  📈 Dashboard Analytics                                         │
│     └─ Comprehensive statistics and performance tracking        │
│                                                                  │
│  🌍 Community Features                                          │
│     └─ Browse and take community-created tests                  │
│                                                                  │
│  🎨 Responsive Design                                           │
│     └─ Dark/light theme support with modern UI                  │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🏗️ Architecture Overview

```
┌──────────────────────────────────────────────────────────────────┐
│                     TEST.AI ARCHITECTURE                         │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌────────────────┐         ┌──────────────────┐               │
│  │   Frontend     │         │   Backend API    │               │
│  │  (Next.js 14)  │◄────────┤  (Next.js API)   │               │
│  │   React 18     │         │  Server Actions  │               │
│  │ Tailwind CSS   │         │                  │               │
│  └────────────────┘         └────────┬─────────┘               │
│         ▲                            │                          │
│         │                            ▼                          │
│         │                   ┌──────────────────┐               │
│         │                   │   Database       │               │
│         │                   │ (MongoDB)        │               │
│         │                   │ + Mongoose ORM   │               │
│         │                   └──────────────────┘               │
│         │                                                       │
│         └───────────────────────────┐                          │
│                                     ▼                          │
│                          ┌──────────────────┐                 │
│                          │   AI Services    │                 │
│                          │ Google Gemini AI │                 │
│                          │ - Generate Tests │                 │
│                          │ - Score & Analyze│                 │
│                          └──────────────────┘                 │
│                                                                 │
└──────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

```
╔════════════════════════════════════════════════════════════════╗
║                      TECHNOLOGY STACK                          ║
╠════════════════════════════════════════════════════════════════╣
║                                                                ║
║  FRONTEND                          BACKEND                    ║
║  ├─ Next.js 14                     ├─ Next.js API Routes     ║
║  ├─ React 18                       ├─ Server Actions         ║
║  ├─ Tailwind CSS                   ├─ NextAuth.js            ║
║  ├─ Radix UI                       └─ Middleware             ║
║  ├─ Lucide React Icons                                       ║
║  ├─ Framer Motion                  DATABASE                  ║
║  └─ Animation Support              ├─ MongoDB                ║
║                                    ├─ Mongoose ODM           ║
║  AUTH & SECURITY                   └─ bcryptjs               ║
║  ├─ NextAuth.js                                              ║
║  ├─ JWT Tokens                     AI & SERVICES             ║
║  └─ bcryptjs                       ├─ Google Gemini AI       ║
║                                    ├─ @google/generative-ai  ║
║  STYLING                           └─ jsonwebtoken           ║
║  ├─ Tailwind CSS                                             ║
║  ├─ CSS Modules                                              ║
║  └─ Dark/Light Theme                                         ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

---

## 📊 Database Schema

```
┌──────────────────────────────────────────────────────────────┐
│                    DATA MODELS                               │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  USER                          TEST                         │
│  ├─ _id                        ├─ _id                       │
│  ├─ name                       ├─ title                     │
│  ├─ email                      ├─ description               │
│  ├─ password (hashed)          ├─ numQuestions              │
│  ├─ role                       ├─ difficulty                │
│  └─ timestamps                 ├─ timeLimit                 │
│                                ├─ tags                      │
│                                ├─ questions []              │
│                                ├─ createdBy (ref: User)     │
│                                └─ timestamps                │
│                                                              │
│  TEST RESULT                   QUESTION                     │
│  ├─ _id                        ├─ text                      │
│  ├─ userId                     ├─ options []                │
│  ├─ testId (ref: Test)         └─ correctAnswer             │
│  ├─ score                                                    │
│  ├─ correctAnswers                                          │
│  ├─ wrongAnswers                                            │
│  ├─ analysis                                                │
│  ├─ questions []                                            │
│  └─ timestamps                                              │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## 🗂️ Project Structure

```
test.ai/
├── 📄 Configuration Files
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── jsconfig.json
│   ├── postcss.config.mjs
│   ├── components.json
│   ├── auth.js
│   ├── middleware.js
│   └── .env.local
│
├── 📁 src/
│   ├── 📁 app/                    # Next.js App Router
│   │   ├── layout.jsx             # Root layout
│   │   ├── page.jsx               # Home page
│   │   ├── globals.css            # Global styles
│   │   ├── (auth)/                # Auth group routes
│   │   │   ├── signin/page.jsx
│   │   │   └── signup/page.jsx
│   │   ├── api/                   # API routes
│   │   │   └── auth/
│   │   │       ├── [...nextauth]/route.js
│   │   │       └── signup/route.js
│   │   ├── dashboard/page.jsx     # User dashboard
│   │   ├── community/page.jsx     # Community tests
│   │   ├── test-start/page.jsx    # Create test
│   │   ├── test/[testId]/page.jsx # Take test
│   │   └── test-result/[resultId]/page.jsx # Results
│   │
│   ├── 📁 components/             # React components
│   │   ├── 📁 ui/                 # Reusable UI components
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── input.jsx
│   │   │   ├── label.jsx
│   │   │   ├── select.jsx
│   │   │   ├── progress.jsx
│   │   │   ├── toast.jsx
│   │   │   └── dialog.jsx
│   │   ├── 📁 blocks/             # Section components
│   │   │   ├── HeroSection.jsx
│   │   │   └── FeaturesSection.jsx
│   │   ├── Navbar.jsx
│   │   └── ...other components
│   │
│   ├── 📁 lib/                    # Utilities & helpers
│   │   ├── dbConnect.js           # MongoDB connection
│   │   ├── gemini.js              # AI integration
│   │   └── utils.js               # Helper functions
│   │
│   ├── 📁 models/                 # Database schemas
│   │   ├── user.model.js
│   │   ├── Test.js
│   │   └── TestResult.js
│   │
│   └── 📁 actions/                # Server actions
│       ├── index.js               # User actions
│       └── testActions.js         # Test actions
│
├── 📁 public/                     # Static assets
│   ├── animation.json
│   ├── loading.json
│   └── loading2.json
│
└── 📄 Documentation
    ├── README.md
    └── .gitignore
```

---

## 🔄 Data Flow

```
USER FLOW:

┌─────────────────────────────────────────────────────────────────┐
│                    USER JOURNEY                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. SIGNUP/LOGIN                                               │
│     ┌──────────────┐                                            │
│     │   Enter      │                                            │
│     │ Credentials  │                                            │
│     └──────┬───────┘                                            │
│            │                                                    │
│            ▼                                                    │
│     ┌──────────────────┐                                        │
│     │  NextAuth        │                                        │
│     │  Validation      │                                        │
│     └──────┬───────────┘                                        │
│            │                                                    │
│            ▼                                                    │
│     ┌──────────────────┐                                        │
│     │ Create Session   │                                        │
│     │ Redirect Home    │                                        │
│     └──────────────────┘                                        │
│                                                                 │
│  2. CREATE TEST                                                │
│     ┌──────────────┐                                            │
│     │ Fill Form    │◄──── Topic, Difficulty, Questions        │
│     └──────┬───────┘                                            │
│            │                                                    │
│            ▼                                                    │
│     ┌──────────────────┐                                        │
│     │ Gemini AI Gen    │                                        │
│     │ Questions        │                                        │
│     └──────┬───────────┘                                        │
│            │                                                    │
│            ▼                                                    │
│     ┌──────────────────┐                                        │
│     │ Save to DB       │                                        │
│     └──────────────────┘                                        │
│                                                                 │
│  3. TAKE TEST                                                  │
│     ┌──────────────┐                                            │
│     │ View Q&A     │                                            │
│     │ + Timer      │                                            │
│     └──────┬───────┘                                            │
│            │                                                    │
│            ▼                                                    │
│     ┌──────────────────┐                                        │
│     │ Submit Answers   │                                        │
│     └──────┬───────────┘                                        │
│            │                                                    │
│            ▼                                                    │
│     ┌──────────────────┐                                        │
│     │ Calculate Score  │                                        │
│     │ Get AI Analysis  │                                        │
│     └──────┬───────────┘                                        │
│            │                                                    │
│            ▼                                                    │
│     ┌──────────────────┐                                        │
│     │ Show Results     │                                        │
│     │ & Feedback       │                                        │
│     └──────────────────┘                                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or cloud)
- Google Gemini API key

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Gupta-02/Skillify_ai.git
cd Skillify_ai

# 2. Install dependencies
npm install

# 3. Configure environment
# Copy .env.local.example to .env.local and fill in your values
cp .env.local.example .env.local

# 4. Start development server
npm run dev
```

### Environment Setup
Create `.env.local` with:

```env
MONGODB_URI=mongodb://localhost:27017/skillify
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
GEMINI_API_KEY=your-gemini-api-key
JWT_SECRET=your-jwt-secret
```

---

## 📱 API Routes

```
┌─────────────────────────────────────────────────────────┐
│              API ENDPOINTS                              │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  AUTHENTICATION                                        │
│  POST   /api/auth/signup          Register user        │
│  GET    /api/auth/[...nextauth]   NextAuth handlers    │
│                                                        │
│  SERVER ACTIONS (src/actions/)                         │
│  createTest()           Create new test                │
│  getTestById()          Fetch test by ID               │
│  getAllTests()          Get all community tests        │
│  submitTest()           Submit test answers            │
│  getTestResult()        Fetch test results             │
│  getUserResults()       Get user's test history        │
│                                                        │
│  USER ACTIONS (src/actions/index.js)                   │
│  createUser()           Register new user              │
│  getUserById()          Fetch user profile             │
│                                                        │
└─────────────────────────────────────────────────────────┘
```

---

## 🎯 Key Features Implementation

### 1️⃣ User Authentication
- ✅ Secure sign up with email & password
- ✅ Login with NextAuth.js
- ✅ Role-based access (Student/Professional)
- ✅ Password hashing with bcryptjs

### 2️⃣ AI-Powered Test Creation
- ✅ Topic-based question generation
- ✅ Difficulty levels (Easy, Medium, Hard)
- ✅ Customizable number of questions
- ✅ Time limit configuration

### 3️⃣ Interactive Test Taking
- ✅ Multiple choice questions
- ✅ Real-time countdown timer
- ✅ Progress tracking
- ✅ Auto-save functionality

### 4️⃣ Automated Scoring
- ✅ Instant score calculation
- ✅ AI-powered answer verification
- ✅ Detailed performance analysis
- ✅ Comparison with difficulty level

### 5️⃣ Dashboard Analytics
- ✅ Test statistics
- ✅ Performance charts
- ✅ Achievement badges
- ✅ Progress history

### 6️⃣ Community Features
- ✅ Browse public tests
- ✅ Search & filter
- ✅ Difficulty-based sorting
- ✅ Take community tests

---

## 🎨 UI Components

```
COMPONENT HIERARCHY:

App
├── Layout
│   ├── Navbar
│   ├── Hero
│   ├── Features
│   └── Footer
│
├── Auth
│   ├── SignIn Form
│   └── SignUp Form
│
├── Dashboard
│   ├── Statistics Cards
│   ├── Charts
│   ├── Test History
│   └── Badges
│
├── Test Creation
│   ├── Form
│   ├── Preview
│   └── Submit
│
├── Test Taking
│   ├── Question Display
│   ├── Timer
│   ├── Progress Bar
│   └── Submit Button
│
└── Results
    ├── Score Display
    ├── Analysis
    ├── Question Review
    └── Retake Button
```

---

## 📊 Performance Metrics

```
ACHIEVEMENT SYSTEM:

┌─────────────────────────────────────────┐
│          BADGE SYSTEM                   │
├─────────────────────────────────────────┤
│                                         │
│  🥇 Gold - Score > 90%                 │
│  🥈 Silver - Score 75-90%              │
│  🥉 Bronze - Score 60-75%              │
│  ⭐ Perfect - 100% Score               │
│  🔥 Streak - 5 Tests Completed         │
│  🚀 Speed - Fast Completion            │
│  📚 Scholar - 10 Tests Completed       │
│  🌟 Master - 100 Tests Completed       │
│                                         │
└─────────────────────────────────────────┘
```

---

## 🔒 Security Features

```
SECURITY LAYERS:

┌──────────────────────────────────────────────┐
│        SECURITY IMPLEMENTATION               │
├──────────────────────────────────────────────┤
│                                              │
│  🔐 Authentication                          │
│     ├─ NextAuth.js sessions                 │
│     ├─ JWT tokens                           │
│     └─ Secure password hashing              │
│                                              │
│  🛡️ Authorization                           │
│     ├─ Middleware protection                │
│     ├─ Route guards                         │
│     └─ Role-based access                    │
│                                              │
│  🔒 Data Security                           │
│     ├─ Encrypted passwords                  │
│     ├─ Secure API endpoints                 │
│     └─ MongoDB connection strings           │
│                                              │
│  ⚡ Rate Limiting                           │
│     ├─ API throttling                       │
│     └─ Brute force protection               │
│                                              │
└──────────────────────────────────────────────┘
```

---

## 📚 Development Workflow

```
GIT WORKFLOW:

main ──────────────────────────────────────────────
│   │                                       
│   ├─→ feature/auth ──→ ✓ ─────→ merge
│   │                                       
│   ├─→ feature/tests ──→ ✓ ─────→ merge
│   │                                       
│   ├─→ feature/dashboard ──→ ✓ ─────→ merge
│   │                                       
│   └─→ feature/community ──→ ✓ ─────→ merge
│
└────────────────────────────────────────────────
```

---

## 🚀 Deployment

```
DEPLOYMENT PIPELINE:

┌──────────────────────────────────────────┐
│     DEPLOYMENT ARCHITECTURE              │
├──────────────────────────────────────────┤
│                                          │
│  1. GitHub Repository                   │
│     └─→ Push to main branch              │
│                                          │
│  2. CI/CD Pipeline (Optional)            │
│     └─→ Run tests & build                │
│                                          │
│  3. Deploy to Production                 │
│     ├─→ Vercel                           │
│     ├─→ AWS                              │
│     ├─→ Heroku                           │
│     └─→ Self-hosted                      │
│                                          │
│  4. Database                             │
│     └─→ MongoDB Atlas (Cloud)            │
│                                          │
│  5. AI Services                          │
│     └─→ Google Gemini API                │
│                                          │
└──────────────────────────────────────────┘
```

---

## 📝 Scripts

```bash
# Development
npm run dev              # Start dev server on localhost:3000

# Production
npm run build            # Build optimized production version
npm start                # Start production server

# Linting
npm run lint             # Run ESLint to check code quality

# Testing (when configured)
npm run test             # Run test suite
```

---

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- **Google Gemini AI** - For powering intelligent question generation
- **Next.js Team** - For the amazing framework
- **Tailwind CSS** - For beautiful styling
- **Radix UI** - For accessible components
- **MongoDB** - For reliable database
- **Community** - For support and feedback

---

## 📞 Support

For issues and questions:
- 🐛 [Report Bugs](https://github.com/Gupta-02/Skillify_ai/issues)
- 💡 [Request Features](https://github.com/Gupta-02/Skillify_ai/issues)
- 📧 [Contact Support](mailto:support@skillify-ai.com)

---

## 🎯 Roadmap

```
v1.0 (Current)
├─ ✅ User Authentication
├─ ✅ Test Creation with AI
├─ ✅ Test Taking Interface
├─ ✅ Automated Scoring
└─ ✅ Basic Dashboard

v1.1 (Upcoming)
├─ 📊 Advanced Analytics
├─ 🏆 Leaderboard System
├─ 👥 Social Features
└─ 📱 Mobile App

v2.0 (Future)
├─ 🌐 Multi-language Support
├─ 🎓 Certification System
├─ 🤖 Advanced AI Features
└─ 📊 Predictive Analytics
```

---

<div align="center">

### ⭐ If you find this project useful, please consider giving it a star!

**Made with ❤️ by [Gupta-02](https://github.com/Gupta-02)**

[GitHub](https://github.com/Gupta-02/Skillify_ai) • [Issues](https://github.com/Gupta-02/Skillify_ai/issues) • [Discussions](https://github.com/Gupta-02/Skillify_ai/discussions)

---

**Last Updated:** October 2025

</div>
