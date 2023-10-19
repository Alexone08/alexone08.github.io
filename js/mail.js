document.addEventListener("DOMContentLoaded", function () {
    const emailForm = document.getElementById("email-form");

    emailForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const to = document.getElementById("to").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        sendEmail(to, subject, message);
    });

    function sendEmail(to, subject, message) {
        fetch("send_email.php", {
            method: "POST",
            body: JSON.stringify({ to, subject, message }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert("Email successfully sent!");
                    emailForm.reset();
                } else {
                    alert("Error sending email. Try later.");
                }
            })
            .catch(error => {
                console.error("Errore: " + error);
            });
    }
});