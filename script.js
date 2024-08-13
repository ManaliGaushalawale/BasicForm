document.getElementById("myForm").addEventListener("click", function (e) {
  e.stopPropagation();

  const inputElement = e.target.closest("input");
  if (inputElement) {
    console.log("Input field clicked or focused:", inputElement.name);
  } else {
    console.log("Clicked element is not an input field");
  }
});

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
  } else {
    alert("Form submitted successfully!");
  }
});
