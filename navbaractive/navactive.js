document.addEventListener('DOMContentLoaded', () => {
    // Get the current path of the URL
    const path = window.location.pathname;

    // Extract the file name from the path
    const fileName = path.substring(path.lastIndexOf('/') + 1);

    // Remove the file extension (e.g., .html)
    const fileNameWithoutExtension = fileName.split('.')[0];

    // Select the element with the class name that matches the file name
    const aboutElement = document.querySelector(`.${fileNameWithoutExtension}`);

    // Check if the element exists and add the 'active' class to it
    if (aboutElement) {
        aboutElement.classList.add('active');
    } else {
        console.warn(`Element with class '${fileNameWithoutExtension}' not found.`);
    }
});
