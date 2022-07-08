function displayModal() {
	modal.style.display = "flex";
    mainWrapper.setAttribute('aria-hidden', 'true')
    body.classList.add('no-scroll')

}

function closeModal() {
    modal.style.display = "none";
    mainWrapper.setAttribute('aria-hidden', 'false')
    body.classList.remove('no-scroll')

}

const modal = document.getElementById("contact_modal");
const mainWrapper = document.getElementById("main");
const body = document.querySelector('body')
const form = document.querySelector('form')


//prevent form to submit
form.addEventListener('submit', event => {
    event.preventDefault();
    //console.log('Form submission cancelled.');

      //Create formData to have access to data
      var formData = new FormData(form)

      let first = formData.get('first')
      let last = formData.get('last')
      let email = formData.get('email')
      let birthdate = formData.get('message')

      console.log(first, last, email, birthdate)
});

