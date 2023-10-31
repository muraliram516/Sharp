const posts = [];
let lastActivityTime = null;

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve("Post Created");
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            lastActivityTime = new Date().toLocaleString();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: No posts to delete");
            }
        }, 1000);
    });
}

createPost({ title: 'First Post' })
    .then(() => updateLastUserActivityTime())
    .then(() => {
        console.log("Posts:", posts);
        console.log("Last Activity Time:", lastActivityTime);
        return deletePost();
    })
    .then((deletedPost) => {
        console.log("Deleted Post:", deletedPost);
        console.log("Remaining Posts:", posts);
    })
    .catch((error) => console.log(error));
