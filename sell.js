document.addEventListener("DOMContentLoaded", function() {
    const description = document.getElementById('description');
    const charCount = document.getElementById('char-count');
    const maxChars = 200;

    description.addEventListener('input', function() {
        const remaining = maxChars - description.value.length;
        charCount.textContent = `${remaining} characters remaining`;
    });

    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents the default form submission behavior
        alert("Form submitted successfully!");

        form.reset(); // Clears all the form fields

        // Optionally, reset the character count display
        charCount.textContent = '200 characters remaining';
    });

    const buyButton = document.querySelector('.button[href="buy.html"]');
    const sellButton = document.querySelector('.button[href="sell.html"]');
    const loanButton = document.querySelector('.button[href="loan.html"]');

    function handleButtonClick(event, url) {
        event.preventDefault();
        alert("NOTE: The use of this web application is in a personal capacity only.");
        window.location.href = url;
    }

    if (buyButton) {
        buyButton.addEventListener('click', function(event) {
            handleButtonClick(event, 'buy.html');
        });
    }

    if (sellButton) {
        sellButton.addEventListener('click', function(event) {
            handleButtonClick(event, 'sell.html');
        });
    }

    if (loanButton) {
        loanButton.addEventListener('click', function(event) {
            handleButtonClick(event, 'loan.html');
        });
    }
});
