function includeHTML() {
    var elements, i, element, file;
    /* Loop through a collection of all HTML elements with a class attribute that contains "include-html" */
    elements = document.querySelectorAll('[include-html]');
    for (i = 0; i < elements.length; i++) {
        element = elements[i];
        /* Get the file name from the "include-html" attribute */
        file = element.getAttribute('include-html');
        /* Load the file into the element using a fetch */
        fetch(file)
            .then(response => response.text())
            .then(data => {
                element.innerHTML = data;
            })
            .catch(error => {
                console.error(`Error loading included file "${file}": ${error}`);
            });
    }
}

/* Call the includeHTML function when the page has fully loaded */
document.addEventListener('DOMContentLoaded', includeHTML);
