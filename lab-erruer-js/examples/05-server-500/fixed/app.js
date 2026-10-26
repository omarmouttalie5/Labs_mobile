const form = document.querySelector('#post-form');
const message = document.querySelector('#message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const title = document.querySelector('#title').value;
  const content = document.querySelector('#content').value;

  try {
    // FIX: the endpoint uses the correct column names and returns JSON
    const response = await fetch('/api/posts.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });

    if (!response.ok) {
      // Show the message sent by the server when there is one
      const body = await response.json().catch(() => ({}));
      throw new Error(body.error || 'HTTP ' + response.status);
    }

    const created = await response.json();
    message.textContent = 'Post published with id ' + created.id;
    form.reset();
  } catch (error) {
    message.textContent = 'Could not publish: ' + error.message;
    console.error(error);
  }
});
