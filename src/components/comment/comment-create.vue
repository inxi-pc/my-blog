<template>
    <div id="respond-post-169" class="respond">
        <div class="cancel-comment-reply">
            <a id="cancel-comment-reply-link" href="" rel="nofollow" style="display:none" onclick="return TypechoComment.cancelReply();">取消回复</a>        
        </div>
        <h3 id="response">添加新评论</h3>
        <form method="post" action="" id="comment-form" role="form">
            <p>
                <label for="author" class="required">称呼</label>
                <input type="text" name="author" id="author" class="text" value="" required="">
            </p>
            <p>
                <label for="mail" class="required">Email</label>
                <input type="email" name="mail" id="mail" class="text" value="" required="">
            </p>
            <p>
                <label for="url">网站</label>
                <input type="url" name="url" id="url" class="text" placeholder="http://" value="">
            </p>
                        <p>
                <label for="textarea" class="required">内容</label>
                <textarea rows="8" cols="50" name="text" id="textarea" class="textarea" required=""></textarea>
            </p>
            <p>
                <button type="submit" class="submit">提交评论</button>
            </p>
        </form>
    </div>
</template>