<template>
    <div class="respond">
        <div class="cancel-comment-reply">
            <a id="cancel-comment-reply-link" href="" rel="nofollow" style="display:none" onclick="return TypechoComment.cancelReply();">取消回复</a>
        </div>
        <h3 id="response">Create new Comment</h3>
        <form method="post" action="" id="comment-form" role="form">
            <p>
                <label for="author" class="required">Author</label>
                <input type="text" name="author" id="author" class="text" value="" required="">
            </p>
            <p>
                <label for="mail" class="required">Email</label>
                <input type="email" name="mail" id="mail" class="text" value="" required="">
            </p>
            <p>
                <label for="url">Website</label>
                <input type="url" name="url" id="url" class="text" placeholder="http://" value="">
            </p>
            <p>
                <label for="textarea" class="required">Content</label>
                <textarea rows="8" cols="50" name="text" id="textarea" class="textarea" required=""></textarea>
            </p>
            <p>
                <button type="submit" class="submit">Submit</button>
            </p>
        </form>
    </div>
</template>
