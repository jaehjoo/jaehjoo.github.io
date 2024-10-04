let currentPage = 1;
const postsPerPage = 9;
const posts = document.querySelectorAll('.post');
const totalPages = Math.ceil(posts.length / postsPerPage);

function showPage(page) {
    const start = (page - 1) * postsPerPage;
    const end = start + postsPerPage;

    posts.forEach((post, index) => {
        post.style.display = (index >= start && index < end) ? 'block' : 'none';
    });

    document.getElementById('page-info').innerText = `${page} / ${totalPages}`;
}

document.getElementById('prev-page').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('next-page').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
});

showPage(currentPage);