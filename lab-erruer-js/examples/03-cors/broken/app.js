const result = document.querySelector('#result');

async function loadPosts() {
  // BUG: this endpoint does not send Access-Control-Allow-Origin.
  // Console: blocked by CORS policy ... TypeError: Failed to fetch
  const response = await fetch('http://localhost:8000/api/posts_nocors.php');
  const body = await response.json();
  result.textContent = body.total + ' posts received';
}

loadPosts();
