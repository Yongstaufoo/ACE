function showAlertAndRedirect(action) {
    alert("NOTE: To prevent scams, ONLY communicate with official user's email.");
    let url;
    switch (action) {
        case 'buy':
            url = 'buy.html';
            break;
        case 'sell':
            url = 'sell.html';
            break;
        case 'borrow':
            url = 'borrow.html';
            break;
        default:
            url = '#';
    }
    window.location.href = url;
}
document.addEventListener("DOMContentLoaded", function() {
    const description = document.getElementById('description');
    const charCount = document.getElementById('char-count');
    const maxChars = 200;

    description.addEventListener('input', function() {
        const remaining = maxChars - description.value.length;
        charCount.textContent = `${remaining} characters remaining`;
    });
});
