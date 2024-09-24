function toggleTheme(isDarkMode) {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
}

// Example usage
toggleTheme(true); // Switch to dark mode
toggleTheme(false); // Switch to light mode