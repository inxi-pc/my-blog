export default class Comment {
    constructor() {
        // @primary key
        this.comment_id = 0;
        // @reference
        this.post_id = 0;
        this.comment_user_name = "";
        this.comment_user_email = "";
        this.comment_user_link = "";
        this.comment_content = "";
        this.comment_created_at = "";
        this.comment_updated_at = "";
        this.comment_deleted_at = "";
    }

    static getCommentById(cId) {
        return this.getComment(cId);
    }

    static getComment(cId) {
        var comment = new Comment();
        comment.comment_id = 1;
        comment.post_id = 1;
        comment.comment_user_name = "xiong";
        comment.comment_user_email = "Javascript";
        comment.comment_user_link = "Test content, fuck your github";
        comment.comment_content = "coment test";
        comment.comment_created_at = "2010-03-04 12:00:00";
        comment.comment_updated_at = "2010-03-14 22:00:00";

        return comment;
    }

    static getCommentsByIds(cIds) {
        return this.getComments(cIds);
    }

    static getCommentsByPost(pId) {
        return this.getComments(pId);
    }

    static getCommentsNewest() {
        return this.getComments();
    }

    static getComments(cond, order = "DESC", by = "comment_id", limit = 0) {
        var comments = [];
        comments.push(this.getComment(0));

        return comments;
    }
}