# UserDirectory App

A React Native user directory app built with React Navigation, Redux Toolkit and JSONPlaceholder API.

## Installation
```sh
npm install
```

## Run the app
In a new terminal:
```sh
# Android
npm run android

# iOS
npm run ios
```

## Architecture

- **Navigation** — React Navigation v6, Native Stack + Bottom Tabs
- **State** — Redux Toolkit with Redux Persist (auth + favorites survive app restarts)
- **API** — Axios with local cache via AsyncStorage for offline support
- **Offline** — NetInfo hook detects connection state, animated banner shown automatically

## What I would improve with more time

- **Icons** — replace image icon icons with a proper icon library like react-native-vector-icons
- **Animations** — extend Reanimated usage for like , and home page item display.
- **UX polish** — overall improved ui and ux and haptic feedback on favorite toggle
- **Performance** — FlashList instead of FlatList for large lists, image caching with FastImage