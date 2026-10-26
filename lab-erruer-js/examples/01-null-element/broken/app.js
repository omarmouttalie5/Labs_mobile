const form = document.querySelector('#comment-form');
const message = document.querySelector('#message');

// TypeError: Cannot read properties of null (reading 'addEventListener')
form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = 'Comment sent: ' + document.querySelector('#comment').value;
});
