// template_s3chdi9
// service_rqanuq8
// OXbkIROvgSe0HUYwQ

let isModalOpen = false
const scaleFactor = 1 / 20

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape")
  const x = event.clientX * scaleFactor
  const y = event.clientY * scaleFactor

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0 
    const boolInt = isOdd ? -1 : 1
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
  }
}

document.addEventListener("mousemove", moveBackground)

function toggleContrast() {
  document.body.classList.toggle("dark-theme")
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";

  emailjs
    .sendForm(
      "service_rqanuq8",
      "template_s3chdi9",
      event.target,
      "OXbkIROvgSe0HUYwQ",
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
      success.style.display = "flex";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at shelbynord2017@gmail.com.",
      );
    });

  function submitForm() {
    setTimeout(() => {
      submissionStatus = "submitted";
      console.log("Form has been submitted.");
      document.querySelector(".modal__overlay--success").style.display = "flex";
    }, 2000); // Simulate form submission delay
  }
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open")
  }
  isModalOpen = true;
  document.body.classList += " modal--open"
}