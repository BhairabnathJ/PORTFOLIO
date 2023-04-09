const form = document.getElementById('contact-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const data = new URLSearchParams(new FormData(form))
    const request = fetch(
        'http://127.0.0.1:5500/contact/send-email.php',
        {
            method: 'post',
            body: data
        }
    ).then(res => {
        // Handle your response
    }).catch(err => {
        // Handle your error
    })

    const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('http://127.0.0.1:5500/contact/send-email.php', (req, res) => {
  // Do whatever here to process your emails
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  res.send('POST request recieved')
})

app.listen(5500, () => {
  console.log(`Example app listening on port ${5500}`)
})
})