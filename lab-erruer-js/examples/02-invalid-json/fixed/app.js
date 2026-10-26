const list = document.querySelector('#posts');
const errorBox = document.querySelector('#error');

async function loadPosts() {
  try {
    const response = await fetch('/api/posts.php');
    // Check the status BEFORE parsing the body
    if (!response.ok) {
      throw new Error('HTTP ' + response.status + ' on ' + response.url);
    }
    const result = await response.json();
    list.innerHTML = result.data.map((p) => `<li>${p.title}</li>`).join('');
  } catch (error) {
    errorBox.textContent = 'Could not load the posts: ' + error.message;
    console.error(error);
  }
}

loadPosts();
