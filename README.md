# 💪 FitLog

**FitLog** is a modern and responsive workout management web application built with **Next.js, TypeScript, and Tailwind CSS**.

The application allows users to explore a workout library, search for workouts, view detailed workout information, create a daily workout plan, save workouts for later, sort workouts, and track basic workout statistics.

## 🚀 Live Demo

- **Vercel:** [Live Demo](https://fitlogbhola.vercel.app/)

## 📂 GitHub Repository

**GitHub:** [FitLog](https://github.com/bhola16/FitLog-Bhola)

---

## ✨ Features

### 1. 🏋️ Workout Library

Users can explore a collection of workouts with useful information, including:

- Workout name
- Muscle groups
- Duration
- Calories burned
- Equipment
- Rating

The workout information is dynamically loaded from the FitLog REST API.

### 2. 📋 Today's Workout Plan

Users can create a personalized workout plan for the day.

The application allows users to:

- Add workouts to today's plan
- Add a maximum of 5 workouts
- Prevent duplicate workouts
- Remove workouts from the plan
- View all selected workouts in one place

If the user tries to add more than five workouts, a notification is displayed.

### 3. ❤️ Saved Workouts

Users can save workouts for later.

The Saved section allows users to:

- Save workouts
- Prevent duplicate saved workouts
- Remove saved workouts
- View all saved workouts
- Switch between Today's Plan and Saved workouts

### 4. 📊 Workout Statistics

The My Plan page provides a summary of the currently selected workouts.

The application displays:

- Total exercises
- Total workout minutes
- Total calories

These values are automatically updated when workouts are added or removed.

### 5. ↕️ Workout Sorting

Users can sort workouts using different criteria.

Available sorting options:

- Duration
- Calories
- Rating

Today's Plan and Saved workouts maintain their own sorting preferences, so changing the sorting option in one tab does not reset the other tab.

### 6. 🔔 Toast Notifications

**React-Toastify** is used to provide instant feedback for user actions.

Notifications are displayed when:

- A workout is added to Today's Plan
- A workout is saved
- A duplicate workout is attempted
- The maximum workout limit is reached
- A workout is already saved
- Workouts are sorted

### 7. 📱 Responsive Design

FitLog is designed to work across different screen sizes.

- 📱 **Mobile:** Responsive single-column layouts with mobile navigation
- 📲 **Tablet:** Adaptive layouts and spacing
- 💻 **Desktop:** Expanded multi-column workout layouts

The navigation bar also provides a hamburger menu on smaller screens.

### 8. 💾 Local Storage Persistence

FitLog uses browser **LocalStorage** to preserve the user's workout selections.

The application stores:

- `fitlog-plan`
- `fitlog-saved`

This allows the user's Today's Plan and Saved Workouts to remain available even after refreshing the browser.

### 9. ⏳ Loading States

FitLog provides loading feedback while workout information is being prepared.

The My Plan page displays:

```text
Loading workouts…
```

before the locally stored workout data has been hydrated.

A loading animation is also used to provide clear visual feedback to the user.

### 10. 📭 Empty States

The application provides meaningful empty states when there are no workouts available.

For an empty workout plan, users see:

```text
NOTHING HERE YET
```

with the message:

```text
Browse the library and add a lift to get today moving.
```

A **Go to workouts** button allows the user to return to the workout library.

Searches that produce no results display a separate **No Workouts Found** message.

### 11. 📄 Workout Details

Users can open an individual workout to view detailed information.

The workout details page provides information such as:

- Workout name
- Muscle groups
- Duration
- Calories burned
- Equipment
- Rating
- Workout description

Users can also perform workout-related actions from the details page.

### 12. 🔎 Workout Search

Users can quickly search for workouts using the search bar.

Search works by:

- Workout name
- Muscle group

The workout list updates instantly as the user types.

A clear button is also available to quickly reset the search.

### 13. 🎨 Modern Dark UI

FitLog uses a dark, modern gym-inspired interface.

The design includes:

- Dark background
- Lime-green accent color
- Interactive hover effects
- Smooth transitions
- Responsive cards
- Rounded components
- Clear typography
- Interactive buttons
- Custom loading and empty states

### 14. ❌ Custom 404 Page

FitLog includes a custom **404 Not Found** page for invalid routes.

This provides users with a clear error message and a way to navigate back to the application.

---

## 🛠️ Technologies Used

- **Next.js 16** – React framework for building the application
- **React** – User interface development
- **TypeScript** – Type-safe JavaScript
- **Tailwind CSS** – Styling and responsive design
- **DaisyUI** – UI components and utilities
- **React-Toastify** – Toast notifications
- **Lucide React** – Icons
- **REST API** – Dynamic workout data
- **LocalStorage** – Client-side data persistence
- **Vercel** – Deployment

---

## 🔗 API

FitLog uses a REST API to retrieve workout information.

### All Workouts

```text
https://api.abcz.workers.dev/api/fitlog
```

### Single Workout Details

```text
https://api.abcz.workers.dev/api/fitlog/{id}
```

The `{id}` parameter represents the unique ID of a workout.

The API provides the workout information used throughout the application.

---

## 📂 Project Structure

```text
FitLog/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   ├── logo.png
│   │   └── banner.png
│   │
│   ├── app/
│   │   │
│   │   ├── components/
│   │   │   │
│   │   │   ├── homepage/
│   │   │   │   ├── Banner.tsx
│   │   │   │   ├── WorkoutLibrary.tsx
│   │   │   │   └── WorkoutLibraryClient.tsx
│   │   │   │
│   │   │   └── shared/
│   │   │       ├── Navbar.tsx
│   │   │       ├── Footer.tsx
│   │   │       ├── WorkOutCard.tsx
│   │   │       └── MyPlanCard.tsx
│   │   │
│   │   ├── contex/
│   │   │   └── FitLogContex.tsx
│   │   │
│   │   ├── my-plan/
│   │   │   └── page.tsx
│   │   │
│   │   ├── workouts/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   ├── WorkoutActions.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   └── global.css
│   │
│   └── type/
│       └── type.ts
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/bhola16/FitLog-Bhola
```

### 2. Navigate to the project directory

```bash
cd FitLog
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will start on the Next.js development server.

### 5. Open the application

Open:

```text
http://localhost:3000
```

---

## 📦 Production Build

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

---

## 📱 Responsive Design

The application follows a responsive-first approach using Tailwind CSS.

### Mobile

- Single-column workout layouts
- Mobile hamburger navigation
- Responsive workout cards
- Stacked hero/banner layout
- Responsive search and controls

### Tablet

- Two-column workout layouts where appropriate
- Adaptive navigation
- Responsive spacing and typography

### Desktop

- Multi-column workout library
- Full navigation menu
- Expanded workout cards
- Larger hero/banner layout
- Optimized My Plan layout

---

## 🔄 Application Flow

```text
User opens FitLog
        ↓
Home page displays hero section
        ↓
Workout library loads workout data from REST API
        ↓
User browses or searches workouts
        ↓
User opens workout details
        ↓
User can add workout to Today's Plan
        ↓
OR
        ↓
User can save workout for later
        ↓
User opens My Plan
        ↓
Today's Plan / Saved workouts displayed
        ↓
User can search and sort workouts
        ↓
Workout statistics are calculated
        ↓
User can remove workouts when needed
```

---

## 💾 Data Persistence

FitLog uses browser **LocalStorage** to preserve workout selections.

### Today's Plan

```text
fitlog-plan
```

### Saved Workouts

```text
fitlog-saved
```

The application loads these values when the user opens the application and updates LocalStorage whenever a workout is added or removed.

This allows workout selections to remain available after a page refresh.

---

## 🧩 State Management

FitLog uses **React Context API** to manage workout-related state throughout the application.

The `FitLogContex.tsx` context manages:

- Today's Plan
- Saved Workouts
- LocalStorage hydration
- Adding workouts
- Saving workouts
- Removing workouts
- Workout limit validation
- Toast notifications

The context makes the workout state accessible to different components without passing the same data through multiple levels of props.

---

## 🔎 Search and Sorting

The workout library supports searching by:

```text
Workout Name
Muscle Group
```

The My Plan page additionally supports sorting by:

```text
Duration
Calories
Rating
```

Search and sorting are handled on the client side to provide an interactive user experience.

---

## 🔔 User Feedback

FitLog uses toast notifications to keep users informed about important actions.

Examples include:

```text
Workout added to today's plan
Workout saved for later
Workout is already in today's plan
Workout is already saved
You can add a maximum of 5 workouts
Sorted by Duration
Sorted by Calories
Sorted by Rating
```

---

## 🎯 Project Highlights

FitLog focuses on providing a simple and practical workout management experience through:

- Dynamic API-based workout data
- Workout search
- Workout details
- Daily workout planning
- Saved workouts
- Workout sorting
- Workout statistics
- LocalStorage persistence
- React Context state management
- Toast notifications
- Loading states
- Empty states
- Responsive navigation
- Custom 404 page
- Responsive UI design

---

## 👨‍💻 Author

**Bholanath Bala**

B.Sc. in Electronics & Communication Engineering
Khulna University

**GitHub:** [bhola16](https://github.com/bhola16)

---

## 📄 License

This project was created for educational purposes as part of the Programming Hero Web Development course.
