// Lyt efter Enter/Return i søgefeltet
document.getElementById('searchInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        window.location.href = 'findklub.html'; // Redirect til findklub
    }
});