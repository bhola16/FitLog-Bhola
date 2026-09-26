Sure — here is a **single complete `README.md` file** with **8 key features**, written cleanly for your FitLog assignment.

````md
# 💪 FitLog

FitLog is a modern and responsive workout management web application built with **Next.js, TypeScript, and Tailwind CSS**. It helps users explore workouts, search for exercises, create a daily workout plan, save favorite workouts, and track basic workout statistics.

## 🌐 Live Demo

**Live Website:** https://fitlogbhola.vercel.app/

**GitHub Repository:** https://github.com/bhola16/FitLog

---

## ✨ Key Features

### 1. 🏋️ Workout Library

Browse a collection of workouts with important information including:

- Workout name
- Muscle groups
- Duration
- Calories burned
- Equipment
- Rating

Workout information is dynamically loaded from the FitLog REST API.

### 2. 🔎 Workout Search

Users can quickly find workouts using the search functionality.

Search works by:

- Workout name
- Muscle group

The results update instantly while typing.

### 3. 📋 Today's Workout Plan

Users can create a personalized workout plan for the day.

- Add workouts to today's plan
- Maximum of 5 workouts
- Prevent duplicate workouts
- Remove workouts from the plan
- View all selected workouts in one place

### 4. ❤️ Save Workouts for Later

Users can save their favorite workouts for future use.

- Save workouts
- Prevent duplicate saved workouts
- Remove saved workouts
- Switch between Today's Plan and Saved workouts

### 5. 📊 Workout Statistics

The My Plan page displays useful workout statistics based on the currently selected list.

It shows:

- Total exercises
- Total workout minutes
- Total calories

The statistics update automatically when workouts are added or removed.

### 6. ↕️ Workout Sorting

Users can organize their workouts using multiple sorting options:

- Duration
- Calories
- Rating

The application maintains separate sorting preferences for **Today's Plan** and **Saved** workouts.

### 7. 🔔 Toast Notifications

FitLog provides instant feedback through toast notifications for important actions such as:

- Adding a workout
- Saving a workout
- Duplicate workout attempts
- Reaching the 5-workout limit
- Sorting workouts

### 8. 📱 Responsive Design

FitLog is fully responsive and designed for:

- 📱 Mobile devices
- 📲 Tablets
- 💻 Laptops
- 🖥️ Desktop screens

The navigation also includes a mobile hamburger menu for smaller screens.

### 9. 💾 Local Storage Persistence

Workout plans and saved workouts are stored in the browser's **LocalStorage**.

This means selected workouts remain available even after refreshing the page.

The application uses:

- `fitlog-plan`
- `fitlog-saved`

### 10. ⏳ Loading & Empty States

The application provides clear feedback when there is no content to display.

Features include:

- Loading indicator while workout data is being prepared
- `NOTHING HERE YET` empty state
- Search-specific `No Workouts Found` message
- Quick navigation back to the workout library

### 11. 🎨 Modern Dark UI

FitLog uses a modern dark-themed interface designed for a clean gym-focused experience.

The interface includes:

- Dark background
- Lime-green accent color
- Interactive hover effects
- Smooth transitions
- Responsive workout cards
- Clear typography and spacing

### 12. ❌ Custom 404 Page

FitLog includes a custom **404 Not Found** page for invalid routes, providing users with a clear way to return to the application.

---

## 🛠️ Technologies Used

- **Next.js 16** — React framework
- **React** — User interface
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Styling and responsive design
- **DaisyUI** — UI components and utilities
- **React Toastify** — Toast notifications
- **Lucide React** — Icons
- **REST API** — Workout data
- **LocalStorage** — Client-side data persistence
- **Vercel** — Deployment

---

## 🔗 API

FitLog retrieves workout information from the following REST API:

https://api.abcz.workers.dev/api/fitlog

The API provides the workout data displayed throughout the application.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/bhola16/FitLog.git
```
````

### 2. Navigate to the project

```bash
cd FitLog
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

### 5. Open the application

Open the following URL in your browser:

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

## 📂 Project Structure

```text
FitLog/
├── public/
│   └── assets/
│       └── logo.png
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── homepage/
│   │   │   └── shared/
│   │   │
│   │   ├── contex/
│   │   │   └── FitLogContex.tsx
│   │   │
│   │   ├── my-plan/
│   │   │   └── page.tsx
│   │   │
│   │   ├── workouts/
│   │   │   └── page.tsx
│   │   │
│   │   ├── layout.tsx
│   │   └── page.tsx
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

## 💾 Data Persistence

FitLog uses browser **LocalStorage** to persist user data.

### Today's Plan

```text
fitlog-plan
```

### Saved Workouts

```text
fitlog-saved
```

This allows the user's selected workouts to remain available after refreshing the browser.

---

## 📱 Responsive Navigation

On desktop devices, the navigation provides direct access to:

- Workouts
- My Plan
- Today's Plan count
- Saved workout count

On mobile devices, the navigation switches to a hamburger menu to provide a cleaner layout.

---

## 🎯 Project Highlights

FitLog focuses on providing a simple and practical workout management experience with:

- Dynamic API-based workout data
- Client-side workout management
- Search and sorting
- Persistent local data
- Responsive layouts
- Interactive UI elements
- Loading and empty states
- User-friendly notifications

---

## 👨‍💻 Author

**Bholanath Bala**

B.Sc. in Electronics & Communication Engineering
Khulna University

**GitHub:** [https://github.com/bhola16](https://github.com/bhola16)

---

## 📄 License

This project was developed for educational and assignment purposes.

```

This is ready to paste directly into **`README.md`**. It gives you **12 features**, so you comfortably exceed the required 7–8 features while keeping the README focused on what your actual project does.
```
