function showAlertAndRedirect(action) {
    alert("NOTE: The use of this web application is in a personal capacity only.");
    let url;
    switch (action) {
        case 'buy':
            url = 'buy.html';
            break;
        case 'sell':
            url = 'https://example.com/sell';
            break;
        case 'loan':
            url = 'https://example.com/borrow';
            break;
        default:
            url = '#';
    }
    window.location.href = url;
}