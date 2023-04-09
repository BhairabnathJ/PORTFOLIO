const form = document.getElementById('contact-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const data = new URLSearchParams(new FormData(form))
    const request = fetch(
        '/contact/send-email',
        {
            method: 'post',
            body: data
        }
    ).then(res => {
        // Handle your response
    }).catch(err => {
        // Handle your error
    })
})