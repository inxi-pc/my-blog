export default class Post {
    constructor() {
        // @primary key
        this.post_id = 0;
        // @reference 
        this.user_id = 0;
        // @reference
        this.category_id = "";
        this.post_title = "";
        this.post_content = "";
        this.post_split_position = "";
        this.post_created_at = "";
        this.post_updated_at = "";
        this.post_deleted_at = "";

        // addtional business field
        this.user_name = "";
        this.category_name = "";
    }

    static getPostById(pId) {
        return this.getPost(pId);
    }

    static getPost(pId) {
        var post = new Post();
        post.post_id = 1;
        post.user_id = 1;
        post.category_id = 1;
        post.post_title = "This is test";
        post.post_content = "Test content, fuck your github";
        post.post_split_position = 0;
        post.post_created_at = "2010-03-04 12:00:00";
        post.post_updated_at = "2010-03-14 22:00:00";

        post.user_name = "xiong";
        post.category_name = "Javascript";

        return post;
    }

    static getPostsByIds(pIds, order, by, limit) {
        return this.getPosts(pIds, order, by, limit);
    }

    static getPostsBytitle(pTitles, order, by, limit) {
        return this.getPosts(pTitles, order, by, limit);
    }

    static getPostsByCategory(categoryId, order, by, limit) {
        return this.getPosts(categoryId, order, by, limit);
    }

    static getPostsByUser(userId, order, by, limit) {
        return this.getPosts(userId, order, by, limit);
    }

    static getPostsNewest(order, by, limit) {
        return this.getPosts(order, by, limit);
    }

    static getPosts(cond, order, by = "post_id", limit = 0) {
        var posts = [];
        posts.push(this.getPost(0));

        return posts;
    }
}