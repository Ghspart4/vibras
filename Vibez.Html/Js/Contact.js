document.getElementById("submitBtn").addEventListener("click", function () {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const feedback = document.getElementById("feedback").value;

  const errorMessage = document.getElementById("error-message");
  errorMessage.innerHTML = ""; // Clear previous error messages

  if (!firstName || !lastName || !email || !phone || !feedback) {
      errorMessage.innerHTML = "Please fill out all required fields.";
      return;
  }

  if (!isValidEmail(email)) {
      errorMessage.innerHTML = "Please enter a valid email address.";
      return;
  }

  const subject = encodeURIComponent("Feedback Submission");
  const body = encodeURIComponent(
      `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\nFeedback: ${feedback}`
  );

  const mailtoLink = `mailto:urban.vibez.clothing@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;

  // Display a confirmation message to the user
  alert("Thank you for your feedback! Your submission has been sent.");
});

document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("error-message").innerHTML = ""; // Clear error message
  document.getElementById("firstName").value = ""; // Clear first name
  document.getElementById("lastName").value = ""; // Clear last name
  document.getElementById("email").value = ""; // Clear email
  document.getElementById("phone").value = ""; // Clear phone
  document.getElementById("company").value = ""; // Clear company
  document.getElementById("feedback").value = ""; // Clear feedback
});

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}


    const newCase = document.getElementById("newcase");
    const casePopup = document.getElementById("casePopup");
    const closeCase = document.getElementById("closeCase");

    newCase.addEventListener("click", () => {
        casePopup.style.display = "block";
    });

    closeCase.addEventListener("click", () => {
        casePopup.style.display = "none";
    });

    const refund = document.getElementById("refund");
    const refundPopup = document.getElementById("refundPopup");
    const closeRefund = document.getElementById("closeRefund");

    refund.addEventListener("click", () => {
        refundPopup.style.display = "block";
    });

    closeRefund.addEventListener("click", () => {
        refundPopup.style.display = "none";
    });

    const startChatBtn = document.getElementById("startChatBtn");
    const chatPopup = document.getElementById("chatPopup");
    const closeChatBtn = document.getElementById("closeChatBtn");

    startChatBtn.addEventListener("click", () => {
        chatPopup.style.display = "block";
    });

    closeChatBtn.addEventListener("click", () => {
        chatPopup.style.display = "none";
    });

    /*  Scroll Position  */

const header = document.querySelector(".header");
const scrollLink = document.querySelectorAll(".navbar a:not(:last-child)");

/* enables the Smooth Scroll when using the scroll feature  */
Array.from(scrollLink).map((link) => {
  link.addEventListener("click", (e) => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 90;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
    navbar.classList.remove("show");
  });
});

/* Preloader which tells the user the website is loading rather than showing a blank page  */
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.display = "none";
  }, 2000);
});

/*  Scroll Top  */
const scrollTop = document.querySelector(".scroll-top");

scrollTop.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 300) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});