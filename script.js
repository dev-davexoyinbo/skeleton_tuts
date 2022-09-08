const networkCall = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 5000);
    // reject({ message: "This is an error" });
  });

const skeleton = document.querySelector("#skel-container");

// Display skeleton content only
skeleton.classList.add("showing");

networkCall()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Call completed (error or succes)");
    // Display main content only
    skeleton.classList.remove("showing");
  });
