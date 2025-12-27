// Welcome alert
window.onload = function() {
    console.log("Welcome to Jyoti Tuition Centre Website!");
}

// Admission form validation
document.getElementById('admissionForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let contact = document.getElementById('contact').value;
    let email = document.getElementById('email').value;

    if(name === "" || contact === "" || email === "") {
        alert("Please fill all required fields!");
        return;
    }

    alert(`Thank you ${name}! Your form has been submitted.`);
    this.reset();
});
