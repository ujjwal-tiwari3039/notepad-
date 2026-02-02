# WebPad Pro: Full-Stack Persistent Notepad

A minimalist, responsive web-based notepad built with a **Node.js** backend and a **Vanilla JavaScript** frontend. This project demonstrates the implementation of **CRUD** (Create, Read, Update, Delete) operations and **Asynchronous JavaScript**.



## 🚀 Features
- **Persistent Storage:** Notes are saved to a local `notes.json` file on the server, ensuring data remains after a restart.
- **Auto-Save:** Implements a **Debounce** mechanism to save changes 800ms after the user stops typing.
- **Dynamic Titles:** Automatically updates note titles in the sidebar based on the first line of text.
- **Multi-Note Support:** Create and manage multiple documents through a clean sidebar interface.
- **Dark Mode UI:** Designed with a modern, developer-friendly dark aesthetic.

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript (Fetch API).
- **Backend:** Node.js, Express.js.
- **Storage:** File System (fs) module for JSON-based data persistence.

## 📂 Project Structure
```text
├── server.js          # Express server handling API routes and FS logic
├── index.html         # Frontend UI and client-side logic
├── notes.json         # Local database file (auto-generated)
├── .gitignore         # Prevents node_modules from being tracked
└── README.md          # Project documentation
