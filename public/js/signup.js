$(document).ready(function() {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var nameFirstInput = $("input#firstName-input");
  var nameLastInput = $("input#lastName-input");
  var dateOfBirthInput= $("input#date_of_birth-input");
  var phoneHomeInput = $("input#phone_home-input");
  var phoneCellInput = $("input#phone_cell-input");
  var SchoolInput =$("input#school-input");
  var AdminInput =$("input#admin-input");
  var ChildInput =$("input#child-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      nameFirst: nameFirstInput.val().trim(),
      nameLast: nameLastInput.val().trim(),
      dateOfBirth: dateOfBirthInput.val().trim(),
      phoneHome: phoneHomeInput.val().trim(),
      phoneCell: phoneCellInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password,userData.nameFirst,userData.nameLast,userData.dateOfBirth,userData.phoneHome,userData.phoneCell);
    emailInput.val("");
    passwordInput.val("");
    nameFirstInput.val("");
    nameLastInput.val("");
    dateOfBirthInput.val(""),
    phoneHomeInput.val(""),
    phoneCellInput.val("")
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, nameFirst, nameLast, dateOfBirth, phoneHome, phoneCell) {
    $.post("/api/signup", {
      email: email,
      password: password,
      nameFirst: nameFirst,
      nameLast:nameLast,
      dateOfBirth: dateOfBirth,
      phoneHome: phoneHome,
      phoneCell: phoneCell

    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a boostrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
