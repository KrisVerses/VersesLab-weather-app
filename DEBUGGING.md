# 🛠 Weather App Debugging Guide

This guide documents common debugging issues encountered while developing the Weather App.  
For **detailed solutions**, visit the full guide on **[Notion](#)**.

---

## 🔹 Environment Variables & API Key Issues

- [ ] [How do I move my API key to the `.env` file?](#)
- [ ] [Do I need to import the `.env` file in React?](#)
- [ ] [Why is my API key not working after moving it to `.env`?](#)
- [ ] [Why do I get a 401 Unauthorized error when using the API key from `.env` but not when hardcoded?](#)
- [ ] [Why does my API key print correctly but still cause a 401 error in the React app?](#)
- [ ] [Why did adding a semicolon (`;`) at the end of my `.env` variable break the API key?](#)
- [ ] [Can I commit `.gitignore` after adding `.env` to it?](#)
- [ ] [Would adding `.env` to `.gitignore` be considered a chore in Git commit messages?](#)
- [ ] [How do I remove a previous commit that contains my API key?](#)
- [ ] [How do I revoke and regenerate a new API key safely?](#)

---

## 🔹 React API Requests & Debugging

- [ ] [Why is my React app throwing 401 Unauthorized even though the API key works in the browser?](#)
- [ ] [How can I confirm if my API key is being sent correctly in the request?](#)
- [ ] [How can I debug API requests in React DevTools (Network Tab)?](#)
- [ ] [What does a CORS error mean, and how do I fix it in my React app?](#)
- [ ] [How do I use a proxy to bypass CORS when making API requests?](#)
- [ ] [Why do I need to `trim()` my API key in `process.env`?](#)
- [ ] [How do I ensure React is actually loading `.env` variables?](#)
- [ ] [How do I force React to refresh environment variables after changing `.env`?](#)

---

## 🔹 Git & Security Best Practices

- [ ] [How do I prevent committing my `.env` file?](#)
- [ ] [If I accidentally committed my `.env` file, how do I remove it from Git history?](#)
- [ ] [How do I safely share my environment variables with teammates without committing `.env`?](#)

---

## 🔹 React Code & Best Practices

- [ ] [Would breaking a React component into smaller components be considered a feature (`feat`)?](#)
- [ ] [How should I structure my commit message when refactoring a React component?](#)
- [ ] [Why do we use a callback function inside `setTimeout` in `useEffect`?](#)
- [ ] [Why do we need a cleanup function (`return () => ...`) in `useEffect`?](#)
- [ ] [Why can’t we just `return clearTimeout(...)` instead of `return () => clearTimeout(...)` in `useEffect`?](#)
- [ ] [What improvements can be made to my React Weather App code?](#)

---

## 📌 Full Solutions Available in:

📖 **[View the Full Debugging Guide on Notion](https://www.notion.so/Weather-App-Debugging-1906fd1bcbed8039a1a6c6138a104c28?pvs=4)**
