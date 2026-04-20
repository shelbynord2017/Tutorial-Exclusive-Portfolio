// template_s3chdi9
// service_rqanuq8
// OXbkIROvgSe0HUYwQ

function contact(event) {
    event.preventDefault();
    console.log('it worked')
//     emailjs
//         .sendForm(
//             'service_rqanuq8',
//             'template_s3chdi9',
//             event.target,
//             'OXbkIROvgSe0HUYwQ'
//     ).then(() => {
//         console.log('this worked')
//     })

const loading = document.querySelector('.modal__overlay--loading');
const success = document.querySelector('.modal__overlay--success');
loading.classList += " modal__overlay--visible"
setTimeout(() => {
    loading.classList.remove("modal__overlay--visible");
    success.classList += " modal__overlay--visible"
    console.log('it worked 1')
}, 1000);

function submitForm() {
  setTimeout(() => {
    submissionStatus = "submitted";
    console.log("Form has been submitted.");
    document.querySelector(".modal__overlay--success").style.display = "flex";
  }, 2000); // Simulate form submission delay
}
}

