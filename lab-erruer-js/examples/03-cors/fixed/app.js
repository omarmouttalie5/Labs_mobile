const result = document.querySelector('#result');

async function loadPosts() {
  try {
    // FIX: posts.php sends Access-Control-Allow-Origin for http://localhost:5500
    const response = await fetch('http://localhost:8000/api/posts.php');
    if (!response.ok) throw new Error('HTTP ' + response.status);
    const body = await response.json();
    result.textContent = body.total + ' posts received';
  } catch (error) {
    result.textContent = 'Request failed: ' + error.message;
    console.error(error);
  }
}

loadPosts();
