const surpriseButton = document.getElementById('surpriseButton');
const messageDiv = document.getElementById('message');

surpriseButton.addEventListener('click', () => {
    messageDiv.textContent = "Congratulations Pratham on achieving \"Google Cloud Certified: Cloud Digital Leader\"!";
    messageDiv.style.display = 'block';
});
