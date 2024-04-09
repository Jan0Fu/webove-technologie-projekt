document.addEventListener("DOMContentLoaded", function() {      // Images in gallery
    const thumbnails = document.querySelectorAll(".thumbnails img");
    const fullImage = document.querySelector(".full-image");
  
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function() {
        const fullImageUrl = this.getAttribute("data-fullimage");
        fullImage.setAttribute("src", fullImageUrl);
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {     // JSON data for table
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                const tableBody = document.getElementById('table-body');
                Object.keys(data.Crypto).forEach(cryptoName => {
                    const cryptoData = data.Crypto[cryptoName][0];
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${cryptoName}</td>
                        <td>${cryptoData.symbol}</td>
                        <td>${cryptoData.price}</td>
                        <td>${cryptoData.percent_change_24h}%</td>
                    `;
                    tableBody.appendChild(row);
                });
            } else {
                console.error('Error fetching data:', xhr.statusText);
            }
        } 
    };
    xhr.open('GET', '../crypto.json', true);
    xhr.send();
});

function validateForm(event) {  // Form validation
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const terms = document.getElementById("terms").checked;
    const message = document.getElementById("message").value;

    const nameError = document.getElementById("nameError");
    const phoneError = document.getElementById("phoneError");
    const emailError = document.getElementById("emailError");
    const termsError = document.getElementById("termsError");

    var isValid = true;

    if (name.trim() === "" || name.includes("0")) {
        nameError.textContent = "Name is required";
        isValid = false;
    } else if (/\d/.test(name)) {
        nameError.textContent = "Name cannot contain numbers";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    if (!isValidPhone(phone)) {
        phoneError.textContent = "Phone is invalid";
        isValid = false;
    } else {
        phoneError.textContent = "";
    }

    if (!isValidEmail(email)) {
        emailError.textContent = "Email is invalid";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    if (!terms) {
        termsError.textContent = "You need to accept terms and conditions";
        isValid = false;
    } else {
        termsError.textContent = "";
    }

    if (!isValid) {
        event.preventDefault();
    }

    return isValid;
}

function isValidPhone(phone) {
    const phoneRegex = /(\+421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/;
    return phoneRegex.test(phone);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}