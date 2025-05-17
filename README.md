# To-Do List Web App

A simple and user-friendly task management web application where users can add, delete, and mark tasks as complete.

---

## Features

- Add new tasks
- Delete existing tasks
- Mark tasks as completed or undo completion
- Filter tasks by **All**, **Pending**, or **Completed**
- Tasks are saved in the browser's `localStorage` so they persist across sessions

---

## Technologies Used

- **jQuery** — For dynamic UI updates and event handling
- **Bootstrap 5** — For responsive and modern styling
- **localStorage** — To save tasks locally on the user's browser

---

## Demo

Open `index.html` in your favorite web browser to try it out.

---

## Installation & Usage

1. Clone or download this repository.
2. Make sure all files (`index.html`, `styles.css`, `app.js`) are in the same directory.
3. Open `index.html` in any modern web browser.
4. Start adding, deleting, and managing your tasks!

---

## File Structure

/project-folder
|── index.html # Main HTML page
|── styles.css # CSS styles
└── app.js # JavaScript (jQuery) logic


---

## How It Works

- Tasks are stored as an array of objects in `localStorage` with the shape `{ text: string, completed: boolean }`.
- When the page loads, tasks are fetched from `localStorage` and rendered according to the selected filter.
- UI updates instantly when tasks are added, marked complete/incomplete, deleted, or filtered.
- Task state is automatically saved to `localStorage` on every change.

---

## Future Improvements

- Add user authentication to sync tasks across devices.
- Add due dates and reminders.
- Allow task editing.
- Add animations and accessibility enhancements.

---

## License

This project is open source and free to use.

---

Feel free to contribute or customize it for your needs!

