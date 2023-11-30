// app.js
// This will read and write to the backend server's JSON database.
const URL = 'http://localhost:5000/'
const routes = [ 'posts', 'comments', 'profile' ];
const search = (text) => `?q=${text}`;
const getPost = (route, id) => `${url}${route}/${id}`;
const list = (route) => `${url}${route}`;


const app = document.getElementById('app');

const renderPosts = (posts, tag ='div') => {
    // posts is an array of objects where each object has an id, title and author.
    // We want to generate a string of HTML where each post is a div with this information.
    // Let's use a simple loop to do this.
    let html = '';
    for (let post of posts) {
        html += `<${tag} class="post" data-id="${post.id}">
            <h2>${post.title}</h2>
            <p>By ${post.author}</p>
        </${tag}>`;
    }
    return html;
}
const listPosts = () => {
    // This function will fetch the posts from the backend server and render them.
    fetch(list ('posts'))
        .then(response => response.json())
        .then(data => {
            app.innerHTML = renderPosts(data, 'article');
            const articles = app.querySelectorAll('article h2');
            console.log(articles);
            articles.forEach((el) => {
                el.addEventListener('click', loadpost)
            })
        });
}

const loadpost = (ev) => {
    const heading = ev.target;
    console.log(`loadPost: ${heading.innerText}`);
    const container = heading.parentElement;
    console.log(container.dataset.id);
    const posturl = getPost('posts', container.dataset.id);
    console.log(posturl);
};

listPosts();