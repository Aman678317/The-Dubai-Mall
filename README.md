<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/50dc9c17-3421-4c2c-a14b-7f7a3680f3a0

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# The Dubai Mall - AI Studio App

A modern, AI-powered web application for The Dubai Mall featuring interactive experiences, real-time chat, search capabilities, and visitor information.

View your app in AI Studio: https://ai.studio/apps/50dc9c17-3421-4c2c-a14b-7f7a3680f3a0

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Running Locally](#running-locally)
- [Building for Production](#building-for-production)
- [Firebase Setup](#firebase-setup)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- 🤖 **AI Chat Widget** - Real-time AI-powered chatbot integration
- 🔍 **Smart Search** - AI-enhanced search functionality
- 🎬 **Video Background** - YouTube integration with hero sections
- 📍 **Location Services** - Interactive map with visitor information
- 💳 **Investment Simulator** - Financial projection tool
- 🏪 **Shopping & Dining** - Curated sections for retail and food options
- 🎪 **Attractions Guide** - Comprehensive attraction information
- 📱 **Responsive Design** - Mobile-friendly interface
- 🔐 **Firebase Integration** - Real-time database and authentication

## Technologies

- **Frontend Framework:** React 18+ with TypeScript
- **Build Tool:** Vite
- **Styling:** CSS
- **Backend:** Firebase/Firestore
- **AI Services:** Google Gemini API
- **Backend:** Node.js/TypeScript

## Prerequisites

Before running this project, ensure you have:

- **Node.js** (v16 or higher)
- **npm** (v7 or higher)
- **Google Gemini API Key**
- **Firebase Project** with Firestore database
- **Git** (for version control)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/The-Dubai-Mall.git
   cd The-Dubai-Mall-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

### Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Create a Firestore database
3. Update `firebase-applet-config.json` with your Firebase credentials
4. Review and update `firestore.rules` for your security requirements

### Gemini API Key

1. Get your API key from [Google AI Studio](https://ai.google.dev/)
2. Create `.env.local` file in the project root
3. Add your API key:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

## Project Structure

```
The-Dubai-Mall-main/
├── src/
│   ├── components/              # React components
│   │   ├── AboutSection.tsx
│   │   ├── AiStudioSection.tsx
│   │   ├── AttractionsSection.tsx
│   │   ├── CallToActionSection.tsx
│   │   ├── ChatWidget.tsx       # AI chat integration
│   │   ├── ExperienceSection.tsx
│   │   ├── FoodDiningSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── InvestmentSimulator.tsx
│   │   ├── Navbar.tsx
│   │   ├── SearchOverlay.tsx
│   │   ├── ShoppingSection.tsx
│   │   ├── VisitorInfoMapSection.tsx
│   │   ├── WhatsNewSection.tsx
│   │   └── YouTubeBackground.tsx
│   ├── lib/
│   │   └── firebase.ts          # Firebase configuration
│   ├── services/
│   │   ├── aiChatService.ts     # Gemini chat service
│   │   ├── aiSearchService.ts   # AI search service
│   │   └── firebaseService.ts   # Firebase operations
│   ├── App.tsx                  # Main app component
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── server.ts                    # Node.js server
├── seedTrigger.ts               # Database seeding
├── testAPI.ts                   # API testing
├── firebase-applet-config.json  # Firebase config
├── firestore.rules              # Firestore security rules
├── vite.config.ts               # Vite configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## Running Locally

1. **Development Mode:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (or your configured port)

2. **Build for Production:**
   ```bash
   npm run build
   ```

3. **Preview Production Build:**
   ```bash
   npm run preview
   ```

## Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

## Building for Production

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy to your hosting platform:
   - Firebase Hosting
   - Vercel
   - Netlify
   - AWS Amplify
   - Or any static hosting service

## Firebase Setup

### Security Rules

Review `firestore.rules` for database security configurations. Update rules based on your requirements:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Add your security rules here
  }
}
```

### Database Seeding

Run the seed trigger to populate initial data:

```bash
npx ts-node seedTrigger.ts
```

## API Testing

Test your APIs using the provided test file:

```bash
npx ts-node testAPI.ts
```

## Scripts Available

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run linting (if configured)
- `npm run type-check` - Run TypeScript type checking

## Troubleshooting

### Common Issues

**Issue: Firebase configuration not loading**
- Ensure `firebase-applet-config.json` exists and contains valid credentials
- Check that Firebase project is properly initialized

**Issue: Gemini API errors**
- Verify `VITE_GEMINI_API_KEY` is correctly set in `.env.local`
- Check API quota and billing status in Google Cloud Console

**Issue: Port already in use**
- Run on a different port: `npm run dev -- --port 3000`

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Support

For issues and questions:
- Check existing GitHub issues
- Create a new issue with detailed information
- Include error logs and steps to reproduce

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Google Gemini AI for chat and search capabilities
- Firebase for backend services
- React and Vite communities
