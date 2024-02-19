document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://your-api-url.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('jwt', data.accessToken);
            window.location.href = 'index.html';
        } else {
            alert('Login failed. Please check your credentials.');
        }
    } catch (error) {
        console.error(error);
        alert('An error occurred while logging in. Please try again later.');
    }
});

const jwt = localStorage.getItem('jwt');

if (!jwt) {
    window.location.href = 'login.html';
}