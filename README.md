# React Native Movie App

A simple movie browsing app built with React Native—explore, search, and view details of films using [TMDb](https://www.themoviedb.org/) (The Movie Database) API.

<img width="1179" height="2556" alt="Simulator Screenshot - iPhone 15 Pro - 2025-08-14 at 09 22 45" src="https://github.com/user-attachments/assets/9d9d14f8-ec36-4121-a450-24d5ad47c1f5" />

<img width="1179" height="2556" alt="Simulator Screenshot - iPhone 15 Pro - 2025-08-14 at 09 22 55" src="https://github.com/user-attachments/assets/723eb61c-c10f-40b8-be13-92473583cd62" />



---

##  Features

- Browse trending, popular, and upcoming movies
- Search for movies by title
- View movie details including poster, synopsis, release date, rating, and more
- Add favorites (optional: stored locally)
- Clean, mobile-first UI (customize styling/UI as desired)

---

##  Tech Stack

- **React Native** — cross-platform mobile framework
- **Expo** (optional) — for simplified development and deployment
- **API** — The Movie Database (TMDb)
- **State Management** — React hooks, Context API, Redux, or Zustand (fill in what you’re using)
- **Networking** — `fetch` API or `axios`
- **Styling** — JavaScript styles, NativeWind, or styled components (adjust to your stack)

---

##  Getting Started

### Prerequisites

Make sure you have:

- [Node.js](https://nodejs.org/) (v16 or newer)
- Expo CLI (if applicable): `npm install -g expo-cli`
- A TMDb API key (sign up at [TMDb API](https://www.themoviedb.org/settings/api))

### Setup & Run

1. Clone the repo:
   ```bash
   git clone https://github.com/tanaytadas16/react_native_movie_app.git
   cd react_native_movie_app
   ```
2. Install the dependecies
   ```bash
   npm install
   ```
3. Create a .env file in the root:
   ```bash
   EXPO_PUBLIC_MOVIE_API_KEY=
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=
   EXPO_PUBLIC_APPWRITE_ENDPOINT=
   EXPO_PUBLIC_APPWRITE_DATABASE_ID=
   EXPO_PUBLIC_APPWRITE_COLLECTION_ID=
   ```
4. Start the development server:
   ```bash
   npm run ios
   ```
5. Open your app:

Scan the QR code with the Expo Go app, or

Use the iOS or Android emulator/simulator

---

## Customization Ideas
Favorites — store user favorites using AsyncStorage or secure storage

Filters — allow filtering by genre, release year, rating

Paging + Infinite Scroll — implement seamless scrolling through large lists

Offline support — cache recent results to show when offline

Animations/UI polish — use Lottie, shared element transitions, or gesture handling

---

## License
This project is open-source and available under the MIT License. Feel free to use and modify as needed.

## Acknowledgments
Based on TMDb API

Inspired by similar React Native movie apps and tutorials

