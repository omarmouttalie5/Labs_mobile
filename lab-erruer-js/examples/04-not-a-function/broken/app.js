const list = document.querySelector('#posts');

function renderPosts(posts) {
  // TypeError: posts.map is not a function
  list.innerHTML = posts
    .map((p) => `<article><h2>${p.title}</h2><p>${p.content}</p></article>`)
    .join('');
}

async function loadPosts() {
  const response = await fetch('/api/posts.php');
  const posts = await response.json(); // BUG: this is { data: [...], total: 3 }, not an array
  debugger; // Inspect "posts" in the Variables panel
  renderPosts(posts);
}

loadPosts();
