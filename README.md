<div align="center">

# Create Expo Starter

**The fastest way to bootstrap production-ready Expo React Native apps**

[![npm version](https://img.shields.io/npm/v/create-expo-starter.svg?style=flat-square)](https://www.npmjs.com/package/create-expo-starter)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

[Quick Start](#-quick-start) • [Features](#-features) • [What You Get](#-what-you-get) • [Tech Stack](#-tech-stack) • [Contributing](#-contributing)

</div>

---

## What is Create Expo Starter?

**Create Expo Starter** is a CLI tool that generates fully-configured Expo React Native applications with a modern tech stack in seconds. Stop wasting hours setting up NativeWind, state management, API layers, and navigation—start building your app immediately.

Think of it as **create-t3-app but for mobile development**.

```bash
npx create-expo-starter my-app
```

That's it. One command to get a production-ready mobile app template.

---

## The Problem We Solve

Every React Native developer knows the pain:

| ❌ Without Create Expo Starter | ✅ With Create Expo Starter |
|-------------------------------|----------------------------|
| 2-4 hours setting up a new project | **30 seconds** to get started |
| Manually configuring NativeWind, Tailwind | Pre-configured and working |
| Setting up state management patterns | Zustand store ready to use |
| Creating API layer from scratch | Axios client with interceptors |
| Building auth screens again and again | Login, Signup, Home screens included |
| Figuring out Expo Router setup | File-based routing configured |
| Inconsistent project structures | Clean, scalable architecture |

**Save 4+ hours on every new project.**

---

## Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn

### Create Your App

```bash
# Using npx (recommended)
npx create-expo-starter my-app

# Navigate to your app
cd my-app

# Start developing
npx expo start
```

### Interactive Setup

The CLI will ask you to choose which features you want:

```
? Add NativeWind (Tailwind CSS for React Native)? Yes
? Add Zustand (state management)? Yes
? Add Axios (API client)? Yes
? Add environment variables support? Yes
```

All options are enabled by default—just press Enter to accept.

---

## ✨ Features

### 🎨 **NativeWind (Tailwind CSS)**
Write beautiful UIs with Tailwind classes directly in React Native. No StyleSheet boilerplate.

```tsx
<View className="flex-1 items-center justify-center bg-white">
  <Text className="text-xl font-bold text-blue-500">Hello World</Text>
</View>
```

### 🗂️ **Expo Router (File-based Navigation)**
Modern file-based routing. Create a file, get a route. Simple.

```
app/
├── _layout.tsx    → Root layout
├── index.tsx      → / (Welcome screen)
├── login.tsx      → /login
├── signup.tsx     → /signup
└── home.tsx       → /home
```

### 🐻 **Zustand (State Management)**
Lightweight, fast, and scalable state management without boilerplate.

```tsx
// Already set up for you
const { user, setUser, logout } = useAppStore();
```

### 🌐 **Axios (API Layer)**
Pre-configured API client with interceptors for auth tokens and error handling.

```tsx
import api from './src/api/client';

const response = await api.get('/users');
```

### 🔐 **Auth Screens Ready**
Login, Signup, and Home screens with:
- Form validation
- Loading states
- Error handling
- Navigation flow

### 📁 **Clean Architecture**
Scalable folder structure following best practices.

---

## 📂 What You Get

```
my-app/
├── app/                          # Expo Router (file-based routing)
│   ├── _layout.tsx               # Root layout with global CSS
│   ├── index.tsx                 # Welcome/Start screen
│   ├── login.tsx                 # Login screen with validation
│   ├── signup.tsx                # Signup screen with validation
│   └── home.tsx                  # Home screen (authenticated)
│
├── src/
│   ├── api/                      # API layer
│   │   ├── client.ts             # Axios instance with interceptors
│   │   └── services.ts           # API service functions
│   │
│   ├── components/
│   │   └── ui/                   # Reusable UI components
│   │       ├── Button.tsx        # Button with variants
│   │       ├── Input.tsx         # Input with validation
│   │       └── Card.tsx          # Card container
│   │
│   ├── store/                    # State management
│   │   └── useAppStore.ts        # Zustand store
│   │
│   ├── hooks/                    # Custom React hooks
│   │   └── useToggle.ts
│   │
│   ├── utils/                    # Helper functions
│   │   └── helpers.ts
│   │
│   ├── constants/                # App constants
│   │   └── theme.ts              # Colors, spacing, fonts
│   │
│   ├── config/                   # Configuration
│   │   └── env.ts                # Environment variables
│   │
│   └── types/                    # TypeScript types
│       └── index.ts
│
├── .env                          # Environment variables
├── .env.example                  # Environment template
├── global.css                    # Tailwind CSS entry
├── tailwind.config.js            # Tailwind configuration
├── metro.config.js               # Metro bundler config
├── babel.config.js               # Babel config for NativeWind
└── app.json                      # Expo configuration
```

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| [Expo](https://expo.dev) | React Native framework | SDK 54 |
| [TypeScript](https://typescriptlang.org) | Type safety | 5.x |
| [Expo Router](https://docs.expo.dev/router/introduction/) | File-based navigation | 6.x |
| [NativeWind](https://nativewind.dev) | Tailwind CSS for RN | 4.x |
| [Zustand](https://zustand-demo.pmnd.rs/) | State management | 5.x |
| [Axios](https://axios-http.com) | HTTP client | 1.x |

---

## 👥 Who Should Use This?

### ✅ Perfect For:

- **Indie developers** who want to ship mobile apps fast
- **Startups** building MVPs without wasting time on setup
- **Freelancers** starting new client projects
- **Hackathon participants** who need to move quickly
- **Teams** who want consistent project structure
- **Developers learning** React Native with best practices

### ⚠️ Not For:

- Projects that need custom navigation (not Expo Router)
- Apps that can't use NativeWind for styling
- Projects with very specific architecture requirements

---

## 🔧 Run Locally (Development)

Want to contribute or customize the CLI? Here's how to run it locally:

```bash
# Clone the repository
git clone https://github.com/nibedanpati/create-expo-starter.git
cd create-expo-starter

# Install dependencies
npm install

# Link the package globally
npm link

# Now you can use it locally
create-expo-starter test-app
```

### Project Structure (CLI Source)

```
create-expo-starter/
├── bin/
│   └── create-expo-starter.js    # CLI entry point
│
├── src/
│   ├── index.js                  # Main orchestrator
│   ├── prompts.js                # Interactive prompts
│   │
│   ├── modules/                  # Feature modules
│   │   ├── nativewind.js         # NativeWind setup
│   │   ├── zustand.js            # Zustand setup
│   │   ├── axios.js              # Axios setup
│   │   ├── envConfig.js          # Environment setup
│   │   ├── navigation.js         # Expo Router setup
│   │   └── folderStructure.js    # Folder & components
│   │
│   └── utils/                    # Utilities
│       ├── installer.js          # npm install wrapper
│       └── patcher.js            # File patching utilities
│
└── package.json
```

---

## 🤝 Contributing

We love contributions! Here's how you can help:

### Ways to Contribute

1. 🐛 **Report Bugs** - Open an issue with reproduction steps
2. 💡 **Suggest Features** - Open an issue with your idea
3. 📝 **Improve Docs** - Fix typos, add examples
4. 🔧 **Submit PRs** - Fix bugs or add features

### Development Workflow

```bash
# 1. Fork the repository

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/create-expo-starter.git

# 3. Create a feature branch
git checkout -b feature/amazing-feature

# 4. Make your changes

# 5. Test locally
npm link
create-expo-starter test-app

# 6. Commit your changes
git commit -m "feat: add amazing feature"

# 7. Push to your fork
git push origin feature/amazing-feature

# 8. Open a Pull Request
```

### Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `chore:` Maintenance tasks

---

## ⭐ Star History

If this project helped you, please consider giving it a star! It helps others discover it.

---

<div align="center">

**Made with ❤️ by [Nibedan Pati](https://github.com/nibedanpati)**

[Report Bug](https://github.com/nibedanpati/create-expo-starter/issues) • [Request Feature](https://github.com/nibedanpati/create-expo-starter/issues)

</div>
