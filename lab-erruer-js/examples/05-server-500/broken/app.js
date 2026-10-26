const form = document.querySelector('#post-form');
const message = document.querySelector('#message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#content').value;

  // This endpoint answers 500: open Network > Payload and Response to see why
  const response = await fetch('/api/posts_500.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content }),
  });

  if (!response.ok) throw new Error('Failed to create post'); // too vague to diagnose
  message.textContent = 'Post published';
});
