/**
 * Created by Justin on 9/29/2016.
 */

var form = document.forms[0];

function test() {
  var email = form.elements[3].value;
  var fname = form.elements[1].value;
  var lname = form.elements[2].value;
  var bday = form.elements[4].value;
  var pass = form.elements[6].value;
  var pass2 = form.elements[7].value;

  var wrong = [];
  var index = 0;
  var fault = false;

  if (email == "" || email == null) {
    wrong[index++] = "Email";
    fault = true;
  }

  if (fname == "" || fname == null) {
    wrong[index++] = "First Name";
    fault = true;
  }

  if (lname == "" || lname == null) {
    wrong[index++] = "Last Name";
    fault = true;
  }

  if(bday == "" || bday == null) {
    wrong[index++] = "Birth Date";
    fault = true;
  }

  if(pass == "" || pass == null) {
    wrong[index++] = "Password";
    fault = true;
  }

  if (!(pass2 === pass)) {
    passNotEqual();
    console.log("Fault: " + fault);
    fault = true;
  }

  if (fault) {
    return reject(wrong);
  }
  else {
    console.log(fault);
    var form_sec = document.getElementById("formFields");
    var success = document.getElementById("successMessage");
    form.innerHTML = "";
    success.innerHTML = "<p>Successful submission!</p>";
    return false;
  }


}

function reject(wrong) {
  var section = document.getElementById("errorMessage");
  if(wrong.length > 0) {
    section.innerHTML = "<p>Error! The following fields must be completed: " + wrong.toString() + ".</p>";
  }
  return false;
}

function passNotEqual() {
  document.getElementById("passMessage").innerHTML = "Passwords must be identical!";
}