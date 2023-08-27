function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

/* 
1. get the container element where you want to add the new element

*/


const displayPosts = posts => {
    const postsContainer = document.getElementById('posts-container');
    for (const post of posts) {
        const { id, userId, title, body } = post;
        const div = document.createElement('div');
        div.innerHTML = `
            <h5>Post ID: ${id}<br>User ID: ${userId}</h5>
            <h3>Post Title: ${title}</h3>
            <p>Post: ${body}</p>
        `;
        div.classList.add('post');
        postsContainer.appendChild(div);
    }
}

loadPosts();
