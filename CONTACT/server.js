document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const submitButton = form.querySelector('button[type="submit"]');

  const url = 'https://script.google.com/macros/s/AKfycbzZP7e0eBeKoW-RMTcWyVRXmBTZO4OPnFeU4A2DDh0rAxypnjlqIcxQozZYj48t8qKz/exec';

  try {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: formData
    });

    const responseText = await response.text();

    if (response.ok) {
      submitButton.innerText = 'Thank you!';
      form.reset();
    } else {
      console.error('Server error:', responseText);
      alert('Error submitting the form. Please check the console for more details.');
    }
  } catch (error) {
    console.error('Error submitting the form:', error);
    alert('Error submitting the form. Please check the console for more details.');
  }
});
