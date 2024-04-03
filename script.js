document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const fullImage = document.querySelector('.full-image');
  
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
        const fullImageUrl = this.getAttribute('data-fullimage');
        fullImage.setAttribute('src', fullImageUrl);
        });
    });
});

document.getElementById("pay-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").checked;
    var message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields");
        return;
    }

    alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);

    // document.getElementById("pay-form").reset();
});     