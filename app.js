// template_s3chdi9
// service_rqanuq8
// OXbkIROvgSe0HUYwQ

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            'service_rqanuq8',
            'template_s3chdi9',
            event.target,
            'OXbkIROvgSe0HUYwQ'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible"
    }) .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert (
          "The email service is temporarily unavailable. Please contact me directly at shelbynord2017@gmail.com."
        )
    })

function submitForm() {
  setTimeout(() => {
    submissionStatus = "submitted";
    console.log("Form has been submitted.");
    document.querySelector(".modal__overlay--success").style.display = "flex";
  }, 2000); // Simulate form submission delay
}
}

