# Professor Dashboard

## Overview
The Professor Dashboard is a web application designed to enhance the educational experience by providing tools for mission management, real-time progress tracking, and immediate intervention capabilities. The application integrates gamification elements to motivate and engage students in their learning journey.

## Features
- **Mission Management**: Create and manage educational missions with customizable options such as time limits and mission types.
- **Real-Time Progress Tracking**: Monitor student progress on active missions, including connection status and completion rates.
- **Immediate Intervention**: Provide instant assistance to students who are struggling with a digital "hand raised" feature.
- **Gamification Elements**: Display XP rewards and badges to encourage student participation and achievement.

## Project Structure
```
professor-dashboard
├── public
│   ├── index.html
│   ├── favicon.ico
│   └── assets
│       ├── icons
│       └── fonts
├── src
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── MissionManager.jsx
│   │   ├── ProgressTracker.jsx
│   │   ├── InterventionPanel.jsx
│   │   └── GamificationWidget.jsx
│   ├── styles
│   │   ├── main.css
│   │   ├── components.css
│   │   └── responsive.css
│   ├── utils
│   │   └── api.js
│   ├── App.jsx
│   ├── index.js
│   └── context
│       └── AuthContext.js
├── package.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd professor-dashboard
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
To start the development server, run:
```
npm start
```
The application will be available at `http://localhost:3000`.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.