# PokéSwipe – React Native (Expo)

PokéSwipe is a simple Tinder-style Pokémon browsing app built using **React Native with Expo**.  
Users can view random Pokémon, like or dislike them, and see a list of liked Pokémon.

---

## 🚀 Features

- Welcome screen with app introduction
- Fetches random Pokémon from the public **PokeAPI**
- Displays Pokémon image, name, types, and abilities
- Like / Dislike action required before moving forward
- Liked Pokémon stored using global state (Context API)
- Dedicated screen to view liked Pokémon
- Clean and responsive UI
- Works on both **iOS and Android**

---

## 🧠 Tech Stack

- React Native
- Expo
- TypeScript
- React Navigation (Native Stack)
- Context API for state management
- PokeAPI (https://pokeapi.co)

---

## 📂 Project Structure
```bash
src/
├── components/
│    ├── PokemonCard.tsx
│    ├── LikeDislikeButtons.tsx
│    └── ThemeToggle.tsx
│
├── screens/
│    ├── WelcomeScreen.tsx
│    ├── SwipeScreen.tsx
│    └── LikedPokemonScreen.tsx
│
├── context/
│    └── PokemonContext.tsx
│
├── services/
│    └── pokeapi.ts
│
└── theme/
└── colors.ts
```

---

## ▶️ How to Run

```bash
npm install
npx expo start
```