function showAlertAndRedirect(action) {
    alert("NOTE: To prevent scams, only communicate through work emails.");
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