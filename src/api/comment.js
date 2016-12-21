import API from 'app_lib/api.js'

class CommentModel {
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
}

export default class Comment extends API {
    constructor() {
        super();
        this.apiGateway += '/comments/';
    }
}