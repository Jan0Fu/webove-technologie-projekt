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