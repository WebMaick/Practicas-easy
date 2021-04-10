import darkMode from "./js/dark.js";

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    d.querySelector('.nav__icon').textContent = '☪️'
    darkMode('.nav__icon', 'dark__mode');
})