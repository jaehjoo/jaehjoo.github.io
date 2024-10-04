function loadPost(title, content) {
    document.querySelector("#content-frame").innerHTML = `
        <div class="single-post">
            <h1>${title}</h1>
            <div>${content}</div>
        </div>
    `;
}