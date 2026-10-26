const form = document.querySelector('#comment-form');
const message = document.querySelector('#message');

if (!form) {
  console.error('Element #comment-form not found. Check the id and the script position.');
} else {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    message.textContent = 'Comment sent: ' + document.querySelector('#comment').value;
  });
}
