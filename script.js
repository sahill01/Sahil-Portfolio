 
"use strict";

function qs(selector, all = false) {
  return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}

const sections = qs('.section', true);
const timeline = qs('.timeline');
const line = qs('.line');
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * .8;

function scrollHandler(e) {
  const { scrollY } = window;
  const timelineRect = timeline.getBoundingClientRect();
  const dist = targetY - timelineRect.top;

  set = Math.max(0, Math.min(dist, timeline.offsetHeight));
  line.style.bottom = `calc(100% - ${set}px)`;

  sections.forEach(item => {
    const rect = item.getBoundingClientRect();
    const show = rect.top + rect.height / 2 < targetY;
    item.classList.toggle('show-me', show);
  });
}


scrollHandler();
line.style.display = 'block';
window.addEventListener('scroll', scrollHandler);


const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
  dropDownMenu.classList.toggle('open')
  const isOpen = dropDownMenu.classList.contains('open')

  toggleBtnIcon.classList = isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}



     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
  
        target.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    function copyEmail() {
      // Get the email address element
      var emailElement = document.getElementById('email');

      // Trim any whitespace around the email address
      var emailAddress = emailElement.textContent.trim();

      // Create a temporary input element
      var tempInput = document.createElement('input');
      tempInput.value = emailAddress;
      document.body.appendChild(tempInput);

      // Copy the text from the input element
      tempInput.select();
      document.execCommand('copy');

      // Remove the temporary input element
      document.body.removeChild(tempInput);

      // Hide the copy button and show the check mark temporarily
      var copyButton = document.querySelector('.copy-button');
      var checkIcon = document.querySelector('.check-icon');
      copyButton.style.display = 'none';
      checkIcon.style.display = 'inline';

      // Reset the check mark and show the copy button after a delay
      setTimeout(function() {
        copyButton.style.display = 'inline-block';
        checkIcon.style.display = 'none';
      }, 4000);
    }