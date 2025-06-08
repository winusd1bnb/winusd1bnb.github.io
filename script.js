// Copy Contract Address
function copyCA() {
    const ca = document.getElementById('ca').innerText;
    navigator.clipboard.writeText(ca).then(() => {
        alert('Contract Address copied to clipboard!');
    });
}

// Hamburger Menu Toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('open');
});
