function toggle() {
    console.log('Toggle function executed!');
    var loginForm = document.getElementById("loginForm");
    var signupForm = document.getElementById("signupForm");

    if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    } else {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    }
}

var toggleAnchors = document.querySelectorAll('.toggle-anchor');

toggleAnchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        toggle();
    });
});