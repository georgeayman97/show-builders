const form = document.querySelector('#contact');
const success = document.querySelector('#status-success');
const error = document.querySelector('#status-error');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Hide both messages at the start of submission
    success.classList.add('d-none');
    error.classList.add('d-none');

    try {
        const res = await fetch('https://formspree.io/f/mpwzojyw', {
            method: 'POST',
            body: new FormData(form),
            headers: {'Accept': 'application/json'}
        });

        if (res.ok) {
            success.textContent = 'Thanks for your message!';
            success.classList.remove('d-none'); // Show success messages
            form.reset();
        } else {
            throw new Error();
        }
    } catch {
        error.textContent = 'Failed to send message';
        error.classList.remove('d-none'); // Show error message
    }
});