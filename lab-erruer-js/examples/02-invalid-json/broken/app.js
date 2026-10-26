const list = document.querySelector('#posts');

async function loadPosts() {
  // BUG: the file is called posts.php, not post.php (the server answers with an HTML 404 page)
  const response = await fetch('/api/post.php');
  // SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
  const result = await response.json();
  list.innerHTML = result.data.map((p) => `<li>${p.title}</li>`).join('');
}

loadPosts();
