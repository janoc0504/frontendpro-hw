function getAllPosts() {
    const searchId = document.querySelector('#inputId');
    const postsContainer = document.querySelector('#posts');

    searchId.addEventListener('input', (e) => {
        const postId = e.target.value;
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Post not found');
                }
                return response.json();
            })
            .then(post => {
                // Clear existing post
                postsContainer.innerHTML = '';
                // Display the fetched post
                const postElement = document.createElement('div');
                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                    <button onclick="fetchComments(${searchId.value})">Get Comments</button>
                `;
                postsContainer.appendChild(postElement);
            })
            .catch(error => {
                // Display an error message in the console
                console.error('Error fetching post:', error);
                // Display an error message on the web page
                postsContainer.innerHTML =
                    '<p>Error fetching post. The post does not exist.</p >';
            });
    });
}

getAllPosts();

function fetchComments(postId) {
    const postsContainer = document.querySelector('#posts');

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Comments not found');
            }
            return response.json();
        })
        .then(comments => {
            // Clear existing comments
            postsContainer.innerHTML = '';
            // Display comments
            comments.forEach(comment => {
                const commentElement = document.createElement('div');
                commentElement.innerHTML = `<h3>${comment.name}</h3><p>${comment.body}</p>`;
                postsContainer.appendChild(commentElement);
            });
        })
        .catch(error => {
            // Display an error message in the console
            console.error('Error fetching comments:', error);
            // Display an error message on the web page
            postsContainer.innerHTML = '<p>Error fetching comments. The post does not exist or there is no connection with the server. Please try again later.</p>';
        });
}
