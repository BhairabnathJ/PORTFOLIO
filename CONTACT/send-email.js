// Get the form element
var form = document.getElementById('contact-form');

// Attach an event listener to the form submit event
form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form data
    var formData = new FormData(form);

    // Send the form data to the server using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'CONTACT/send-email.php');
    xhr.onload = function() {
        if (xhr.status === 200) {
            // If the request was successful, check the response
            if (xhr.responseText === 'success') {
                // Display a success message
                alert('Your message has been sent.');
            } else {
                // Display an error message
                alert('There was an error sending your message. Please try again later.');
            }
        } else {
            // Display an error message
            alert('There was an error sending your message. Please try again later.');
        }
    };
    xhr.send(formData);
});
