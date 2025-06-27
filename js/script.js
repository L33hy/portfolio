var tablinks = document.querySelectorAll('.tab-links');
var tabcontents = document.querySelectorAll('.tab-contents');
const scriptURL = 'https://script.google.com/macros/s/AKfycbz_xS_UjbXxShUDMMQ0S-e5wIRImjq_27b4xoarRcYtM7HpSQbZpKDdPwI3HoidG15DUA/exec';

function openTab(tabname) {
    tablinks.forEach(function(tablink) {
        tablink.classList.remove('active-link');
    });
    tabcontents.forEach(function(tabcontent) {
        tabcontent.classList.remove('active-tab');
    });

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

var sideMenu = document.getElementById('sidemenu');

function openMenu() {
    sideMenu.style.right = '0';
}

function closeMenu() {
    sideMenu.style.right = '-200px';
}

// Google Sheets Form Submission
const form = document.forms['submit-to-google-sheet'];
const submitBtn = document.getElementById('msg');
const originalBtnText = submitBtn.innerHTML;

form.addEventListener('submit', e => {
  e.preventDefault(); // Stop page reload

  submitBtn.disabled = true;
  submitBtn.innerHTML = "Sending...";

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
  })
    .then(response => {
      submitBtn.innerHTML = "Message Sent Successfully!";
      setTimeout(() => {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
      }, 3000);
      form.reset();
    })
    .catch(error => {
      console.error('Error!', error.message);
      submitBtn.innerHTML = "Error! Try Again";
      setTimeout(() => {
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
      }, 3000);
    });
});
