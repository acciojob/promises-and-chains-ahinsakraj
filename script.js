//your JS code here. If required.
document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const ageInput = document.getElementById("age");
    const nameInput = document.getElementById("name");

    if (ageInput.value.trim() === "" || nameInput.value.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }

    const submissionPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const age = parseInt(ageInput.value, 10);
        const name = nameInput.value;

        if (age > 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000);
    });

    submissionPromise
      .then((message) => {
        alert(message);
      })
      .catch((message) => {
        alert(message);
      });
  });