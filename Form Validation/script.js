let form = document.getElementById('form');
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => 
  {
  e.preventDefault();
  validateInputs();
});

// Password strength indicator
password.addEventListener("input", () => {
  let passwordValue = password.value.trim();
  const formControl = password.parentElement;
  const small = formControl.querySelector("small");

  if (passwordValue.length < 5) 
  {
    small.innerText = "Weak Password";
    small.style.color = "red";
    small.style.visibility = "visible";
  } else if (passwordValue.length < 8) 
  {
    small.innerText = "Medium Password";
    small.style.color = "orange";
    small.style.visibility = "visible";
  } else 
  {
    small.innerText = "Strong Password";
    small.style.color = "green";
    small.style.visibility = "visible";
  }
});

// Password match checker
password2.addEventListener("input", () => {
  let passwordValue = password.value.trim();
  let password2Value = password2.value.trim();
  const formControl = password2.parentElement;
  const small = formControl.querySelector("small");

  if (passwordValue !== password2Value)
  {
    small.innerText = "Password Doesn't Match";
    small.style.color = "red";
    small.style.visibility = "visible";
  } 
  else 
  {
    small.innerText = "Password Matched Successfully";
    small.style.color = "green";
    small.style.visibility = "visible";
  }
});

function validateInputs()
  {
  let usernameValue = username.value.trim();
  let passwordValue = password.value.trim();
  let password2Value = password2.value.trim();
  let emailValue = email.value.trim();

  // Username
  if (usernameValue === "") 
  {
    setError(username, "Username can't be blank!");
  }
  else
  {
    setSuccess(username);
  }

  // Password
  if (passwordValue === "") 
  {
    setError(password, "Password can't be blank!");
  } 
  else 
  {
    setSuccess(password);
  }

  // Confirm Password
  if (password2Value === "")
  {
    setError(password2, "Confirm password can't be blank!");
  } 
  else if (passwordValue !== password2Value) 
  {
    setError(password2, "Passwords do not match!");
  } 
  else 
  {
    setSuccess(password2);
  }

  // Email
  if (emailValue === "")
  {
    setError(email, "Email can't be blank!");
  } 
  else 
  {
    setSuccess(email);
  }
}

function setError(input, message) 
{
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  small.style.color = "red";
  small.style.visibility = "visible";
}

function setSuccess(input) 
{
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = "";
  small.style.visibility = "hidden";
}
