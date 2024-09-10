function postMessage() {
    const content = document.getElementById('postContent').value.trim();
    if (content) {
        const postsDiv = document.getElementById('posts');
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.textContent = content;
        postsDiv.prepend(postDiv);
        document.getElementById('postContent').value = '';
    } else {
        alert('Please write something before posting.');
    }
}
