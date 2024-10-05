function loadPost(title, content, newUrl) {
    document.querySelector("#content-frame").innerHTML = `
        <div class="single-post">
            <h1>${title}</h1>
            <div>${content}</div>
        </div>
    `;
    window.history.pushState({title, content}, title, newUrl);
}

window.onpopstate = () => {
    window.location.href = '/';
};