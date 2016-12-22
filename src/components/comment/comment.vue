<template>
    <li id="comment-{{ comment.comment_id}}" class="comment-body comment-parent comment-odd">
        <div class="comment-author">
            <img class="avatar" src="" alt="" width="32" height="32">
            <cite class="fn">{{ comment.user_name }}</cite>
        </div>
        <div class="comment-meta">
            <a href="">{{ comment.comment_created_at }}</a>
        </div>
        <div class="comment-content">
            <p>{{ comment.comment_content }}</p>
        </div>
        <div class="comment-reply">
            <a href="" rel="nofollow" onclick="">Reply</a>
        </div>
    </li>
</template>

<script>
export default {
    data: function () {
        comment: {},
    }
}
</script>
