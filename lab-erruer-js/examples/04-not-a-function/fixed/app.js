const list = document.querySelector('#posts');

function renderPosts(posts) {
  if (!Array.isArray(posts)) {
    console.error('Expected an array of posts, received:', posts);
    return;
  }
  list.innerHTML = posts.length
    ? posts.map((p) => `<article><h2>${p.title}</h2><p>${p.content}</p></article>`).join('')
    : '<p>No posts yet.</p>';
}

async function loadPosts() {
  const response = await fetch('/api/posts.php');
  if (!response.ok) throw new Error('HTTP ' + response.status);
  const result = await response.json();
  renderPosts(result.data); // FIX: read the array inside the object
}

loadPosts();
