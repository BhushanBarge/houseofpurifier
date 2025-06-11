// JavaScript to inject the CSS
const css = `
    .navbar-light .navbar-nav .nav-link:hover,
    .navbar-light .navbar-nav .nav-link.active .about {
        color: var(--bs-primary);
    }
`;

// Create a <style> element
const style = document.createElement("style");
style.type = "text/css";
style.textContent = css;

// Append the <style> element to the <head> of the document
document.head.appendChild(style);
