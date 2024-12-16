function validateForm() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const education = document.getElementById("education").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;


    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const dobError = document.getElementById("dobError");
    const genderError = document.getElementById("genderError");
    const phoneError = document.getElementById("phoneError");
    const addressError = document.getElementById("addressError");
    const educationError = document.getElementById("educationError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");


    nameError.textContent = "";
    emailError.textContent = "";
    dobError.textContent = "";
    genderError.textContent = "";
    phoneError.textContent = "";
    addressError.textContent = "";
    educationError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";


    if (!/^[A-Za-z\s]+$/.test(name)) {
        nameError.textContent = "Name must contain only letters.";
        showStatus("error", "Please correct the errors in the form.");
        return false;
    }


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        showStatus("error", "Please correct the errors in the form.");
        return false;
    }


    const birthDate = new Date(dob);
    const currentDate = new Date();
    if (birthDate > currentDate) {
        dobError.textContent = "Date of Birth cannot be in the future.";
        showStatus("error", "Please correct the errors in the form.");
        return false;
    }


    if (gender === "") {
        genderError.textContent = "Please select a gender.";
        showStatus("error", "Please correct the errors in the form.");
        return false;
    }


    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        phoneError.textContent = "Phone number must be 10 digits.";
        showStatus("error", "Please correct the errors in the form.");
        return false;
    }


    if (address.trim() === "") {
        addressError.textContent = "Please enter your address.";
        showStatus("error", "Please correct the errors in the form.");
        return false;
    }


    if (education === "") {
        educationError.textContent = "Please select your education.";
        showStatus("error", "Please correct the errors in the form.");
        return false;
    }


    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long.";
        showStatus("error", "Please correct the errors in the form.");
        return false;
    }


    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match.";
        showStatus("error", "Please correct the errors in the form.");
        return false;
    }


    showStatus("success", "Registration Successful!");
    return true;
}

function showStatus(statusType, message) {
    const statusWindow = document.getElementById("statusWindow");
    const statusMessage = document.getElementById("statusMessage");


    statusMessage.textContent = message;


    if (statusType === "success") {
        statusWindow.classList.remove("error");
        statusWindow.classList.add("success");
    } else {
        statusWindow.classList.remove("success");
        statusWindow.classList.add("error");
    }


    statusWindow.style.display = "block";
}