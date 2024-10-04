document.querySelectorAll('.unsel-tag-filter-view a').forEach(tag => {
    tag.addEventListener('click', function(event) {
        event.preventDefault();
        const selectedTag = this.getAttribute('href').substring(1);
        
        filterPosts(selectedTag);
    });
});

function filterPosts(selectedTag) {
    document.querySelectorAll('.post').forEach(post => {
        const postTags = post.getAttribute('data-tags').split(' ');
        if (postTags.includes(selectedTag)) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}