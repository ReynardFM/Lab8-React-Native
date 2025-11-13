# React Native Navigation App

This is a simple React Native application built to demonstrate various navigation patterns using the React Navigation library. The app showcases a combination of Stack and Tab navigators to create a seamless user experience, along with features like app-wide theming and in-app screen search.

## Features

*   **Tab Navigation:** The root of the application is a Tab Navigator, allowing users to switch between different sections like Home, Search, and Settings. Each tab is equipped with **icons** for better visual guidance.
*   **Stack Navigation:** The "Home" tab contains a Stack Navigator, which enables users to navigate to detail screens and back. The `HomeScreen` itself features **three distinct blocks for redirection** to other screens.
*   **App-wide Dark Mode:** The application supports a **global dark mode** implemented using React Context. Users can toggle dark mode from the `SettingsScreen`, and the theme is applied consistently across all screens and navigators.
*   **In-App Screen Search:** The `SearchScreen` now provides functionality to **search for and navigate to other screens** within the application, enhancing discoverability and user experience.
*   **Parameter Passing:** Demonstrates how to pass parameters between screens, for example, when navigating to the `DetailsScreen`.
*   **Custom Header Styling:** Both Stack and Tab navigators feature custom header styling that adapts to the selected theme.
*   **Screen Components:** The app includes several screens to illustrate the navigation flow:
    *   `HomeScreen`: The main screen within the Home stack, featuring navigation blocks.
    *   `DetailsScreen`: A screen to display more details, accessible from the `HomeScreen` and search.
    *   `ProfileScreen`: A user profile screen, also part of the Home stack and accessible via search.
    *   `SearchScreen`: A dedicated screen for search functionality, accessible via the tab bar, now with in-app screen search.
    *   `SettingsScreen`: A screen for application settings, accessible via the tab bar, now including the dark mode toggle.

## Technologies Used

*   [React Native](https://reactnative.dev/)
*   [React Navigation](https://reactnavigation.org/)
*   [TypeScript](https://www.typescriptlang.org/)
*   [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

## Project Structure

The project follows a standard React Native structure, with the main application logic located in the `src` directory:

```
src/
├── context/
│   └── ThemeContext.js    # Manages app-wide theme (dark/light mode)
├── navigation/
│   ├── StackNavigator.js  # Defines the stack navigation flow
│   └── TabNavigator.js    # Defines the tab navigation flow
└── screens/
    ├── DetailsScreen.js
    ├── HomeScreen.js
    ├── ProfileScreen.js
    ├── SearchScreen.js
    └── SettingsScreen.js
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have completed the [React Native development environment setup](https://reactnative.dev/docs/environment-setup).

### Installation & Running

1.  **Clone the repo**
    ```sh
    git clone https://github.com/ReynardFM/Lab8-React-Native.git
    ```
2.  **Install NPM packages**
    ```sh
    npm install
    ```
3.  **Link Vector Icons (Android only)**
    For Android, ensure that `react-native-vector-icons` fonts are linked by adding the following line to `android/app/build.gradle` (usually at the very end of the file):
    ```gradle
    apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
    ```
4.  **Start the Metro server**
    ```sh
    npm start
    ```
5.  **Run the application**

    *   **Android**
        ```sh
        npm run android
        ```
    *   **iOS**
        ```sh
        npm run ios
        ```

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request