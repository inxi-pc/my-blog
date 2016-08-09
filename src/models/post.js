export default class Post {
    constructor() {
        this.post_id = 0;
        this.post_title = "";
        this.post_author = "";
        this.post_category = "";
        this.post_content = "";
        this.post_split_position = "";
        this.post_created_at = "";
        this.post_updated_at = "";
    }

    static getPostById(pId) {
        return this.getPost(pId);
    }

    static getPost(pId) {
        var post = new Post();
        post.post_id = 1;
        post.post_title = "This is test";
        post.post_author = "xiong";
        post.post_category = "Javascript";
        post.post_content = "Test content, fuck your github";
        post.post_split_position = 0;
        post.post_created_at = "2010-03-04 12:00:00";
        post.post_updated_at = "2010-03-14 22:00:00";

        return post;
    }

    static getPostsByIds(pIds) {
        return this.getPosts();
    }

    static getPostsBytitle(pTitles) {
        return this.getPosts();
    }

    static getPostsByCategory(pCategories) {
        return this.getPosts();
    }

    static getPostsByCreatedAt(pCreateds) {
        return this.getPosts();
    }

    static getPosts(cond) {
        var posts = [];
        posts.push(this.getPost(0));
                console.log(posts);
        return posts;
    }
}