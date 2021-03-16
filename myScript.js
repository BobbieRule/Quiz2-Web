$(function () {
  $("#myForm").submit(checkFormValidity);
});

function checkFormValidity(e) {
  var isValid = true;

  var name = $("#name");
  if (name.val().length < 5) {
    isValid = false;

    highlightBorder(name);
    alert("Name must be atleast 5 characters long!");
  }

  var email = $("#email");
  if (email.val().length == 0) {
    isValid = false;

    highlightBorder(email);
    alert("Please enter a valid email");
  }

  var password = $("#password");
  var confirmPassword = $("#confirm_password");
  if (password.val().length < 8) {
    isValid = false;

    highlightBorder(password);
    alert("Password must be atleast 8 characters long!");
  }

  if (password.val() != confirmPassword.val()) {
    isValid = false;

    highlightBorder(confirmPassword);
    alert("Password must match!");
  }

  if (isValid) {
    alert("Form submitted successfully!");
  } else {
    e.preventDefault();
  }
}

function highlightBorder(tag) {
  tag.css("border-color", "red");
}
