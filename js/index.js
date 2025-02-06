document
  .getElementById("fitnessForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    const fields = [
      "firstName",
      "surname",
      "lastName",
      "gender",
      "phone",
      "email",
      "goal",
    ];

    fields.forEach((field) => {
      const input = document.getElementById(field);
      const errorText = input.nextElementSibling;

      if (input.value.trim() === "") {
        errorText.textContent = "This field is required.";
        isValid = false;
      } else {
        errorText.textContent = "";
      }
    });

    if (isValid) {
      alert("Form submitted successfully!");
      document.getElementById("fitnessForm").reset();
    }
  });
